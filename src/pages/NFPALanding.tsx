
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PhoneCall } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// Phone numbers for different agent types
const agentPhoneNumbers = {
  'Customer Service Representative': '+15392071364',
  'Fire Inspector': '+1-555-002-0002',
  'Emergency Response': '+1-555-003-0003',
  'Sales Agent': '+1-555-004-0004'
};

const NFPALanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    agentType: 'Customer Service Representative'
  });
  const [isCallTriggered, setIsCallTriggered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const saveFormDataToSupabase = async () => {
    try {
      console.log('Attempting to save form data:', formData);
      
      const { data, error } = await supabase
        .from('nfpa_form_submissions')
        .insert([
          {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            agent_type: formData.agentType,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        toast({
          title: "Data Save Error",
          description: `Failed to save form data: ${error.message}`,
          variant: "destructive"
        });
        return false;
      } else {
        console.log('Form data saved successfully:', data);
        toast({
          title: "Data Saved",
          description: "Form data saved successfully to database.",
        });
        return true;
      }
    } catch (error) {
      console.error('Error saving to Supabase:', error);
      toast({
        title: "Database Error",
        description: "Failed to connect to database.",
        variant: "destructive"
      });
      return false;
    }
  };

  const triggerCall = async () => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Save form data to Supabase first
    const saveSuccess = await saveFormDataToSupabase();
    
    if (!saveSuccess) {
      setIsSubmitting(false);
      return;
    }

    const selectedPhoneNumber = agentPhoneNumbers[formData.agentType as keyof typeof agentPhoneNumbers];
    
    // Trigger actual call
    try {
      // For mobile devices, use tel: protocol to initiate call
      window.open(`tel:${selectedPhoneNumber}`, '_self');
      
      setIsCallTriggered(true);
      toast({
        title: "Call Initiated!",
        description: `Calling ${selectedPhoneNumber} (${formData.agentType}) - you should receive a call shortly.`,
      });

      // Log the call attempt with user data
      console.log('Call initiated:', {
        userPhone: formData.phone,
        agentType: formData.agentType,
        agentNumber: selectedPhoneNumber,
        userData: formData,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error initiating call:', error);
      toast({
        title: "Call Error",
        description: "Unable to initiate call. Please try again or call directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Mobile-First Header - Row layout for all screen sizes */}
      <header className="flex flex-row justify-between items-center p-3 sm:p-6 border-b border-slate-700">
        <div className="flex flex-row items-center gap-2 sm:gap-4">
          <img 
            src="/lovable-uploads/15b3278b-98de-49a5-95ed-2fafa2b9a3b2.png" 
            alt="CLARA AI Logo" 
            className="h-6 sm:h-10 w-auto"
          />
          <div className="px-2 py-1 bg-red-600 text-white text-xs rounded-full">
            🔴 Live at NFPA Expo 2025
          </div>
        </div>
        <div className="text-right text-white">
          <div className="font-semibold text-xs sm:text-base">Visit us at Booth #1457</div>
          <div className="text-xs text-slate-300">Live AI Demo Available</div>
        </div>
      </header>

      <div className="container mx-auto px-3 py-4 sm:py-12">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          {/* Content Section - Now visible on mobile */}
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
                Clara Voice
              </h1>
              <p className="text-base sm:text-xl text-slate-300 mb-2">by Clara AI</p>
              
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-6">
                The Only <span className="text-red-500">AI Voice Agent</span> Fire & Life Safety Businesses Need
              </h2>
              
              <p className="text-sm sm:text-lg text-slate-300 mb-4 sm:mb-8">
                Experience Clara Voice live! Get a call within a minute to have a real conversation and see its capabilities firsthand. Your AI voice agent will be fully customized to handle fire inspections, emergency calls, compliance checks, and customer service for your fire & life safety business.
              </p>
            </div>

            {/* Feature Cards - Compact on Mobile */}
            <div className="space-y-3 sm:space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-start gap-2 sm:gap-4">
                    <div className="text-lg sm:text-2xl">🔥</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Never Miss a Critical Call Again</h3>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Fire inspection requests often come at high-stakes moments. Clara Voice ensures every call — even after-hours or during site visits — is answered instantly, professionally, and routed with urgency. No more voicemails. No lost jobs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-start gap-2 sm:gap-4">
                    <div className="text-lg sm:text-2xl">🧠</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Smarter Conversations, Not Just Call Taking</h3>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Clara Voice does more than answer calls — it understands context. Whether it's an inspection report request, a service emergency, or a new job inquiry, our AI gathers accurate details and books directly into your workflow (like ZenFire).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-3 sm:p-6">
                  <div className="flex items-start gap-2 sm:gap-4">
                    <div className="text-lg sm:text-2xl">💰</div>
                    <div>
                      <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Cut Costs, Not Customer Experience</h3>
                      <p className="text-slate-300 text-xs sm:text-sm">
                        Replace expensive answering services with an AI agent that works 24/7, scales with you, and costs a fraction of what you're paying today — while delivering a consistent, branded customer experience every time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form Section - Optimized for mobile single screen */}
          <div className="order-1 lg:order-2 w-full lg:sticky lg:top-8">
            <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm">
              <CardHeader className="text-center pb-2 sm:pb-6 px-3 sm:px-6 pt-3 sm:pt-6">
                <CardTitle className="text-white text-lg sm:text-2xl">
                  Talk to Clara Voice!
                </CardTitle>
                <p className="text-slate-300 text-xs sm:text-base">
                  Get a live demo call and experience Clara Voice in action
                </p>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-4 px-3 sm:px-6 pb-3 sm:pb-6">
                <div>
                  <Label htmlFor="name" className="text-white text-xs sm:text-sm">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white mt-1 h-8 sm:h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white text-xs sm:text-sm">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="ABC Fire Protection Services"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white mt-1 h-8 sm:h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white text-xs sm:text-sm">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@abcfire.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white mt-1 h-8 sm:h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white text-xs sm:text-sm">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white mt-1 h-8 sm:h-10 text-sm"
                  />
                </div>

                <div>
                  <Label htmlFor="agentType" className="text-white text-xs sm:text-sm">AI Voice Agent Type</Label>
                  <Select value={formData.agentType} onValueChange={(value) => handleInputChange('agentType', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white mt-1 h-8 sm:h-10 text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="Customer Service Representative">Customer Service Representative</SelectItem>
                      <SelectItem value="Fire Inspector">Fire Inspector</SelectItem>
                      <SelectItem value="Emergency Response">Emergency Response</SelectItem>
                      <SelectItem value="Sales Agent">Sales Agent</SelectItem>
                    </SelectContent>
                  </Select>
                  {formData.agentType && (
                    <p className="text-xs text-slate-400 mt-1">
                      Will connect from: {agentPhoneNumbers[formData.agentType as keyof typeof agentPhoneNumbers]}
                    </p>
                  )}
                </div>

                <Button
                  onClick={triggerCall}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 sm:py-6 text-sm sm:text-lg font-semibold mt-3 sm:mt-4"
                  disabled={isCallTriggered || isSubmitting}
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  {isSubmitting ? 'Connecting...' : isCallTriggered ? 'Call Initiated!' : 'Call me now!'}
                </Button>

                {isCallTriggered && (
                  <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-green-900/30 border border-green-600 rounded-lg">
                    <p className="text-green-300 text-center text-xs sm:text-sm">
                      🎉 Great! Clara Voice will call you shortly. We'll follow up with you to schedule a personalized demo after the conference.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFPALanding;
