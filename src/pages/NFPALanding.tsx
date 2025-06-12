
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { PhoneCall, Calendar } from 'lucide-react';

const NFPALanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    agentType: 'Customer Service Representative'
  });
  const [isCallTriggered, setIsCallTriggered] = useState(false);
  const [meetingData, setMeetingData] = useState({
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMeetingInputChange = (field: string, value: string) => {
    setMeetingData(prev => ({ ...prev, [field]: value }));
  };

  const triggerCall = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate call trigger
    setIsCallTriggered(true);
    toast({
      title: "Call Initiated!",
      description: "Clara Voice will call you within the next minute to demonstrate our AI capabilities.",
    });
  };

  const submitMeetingRequest = () => {
    toast({
      title: "Meeting Request Submitted!",
      description: "We'll follow up with you to schedule a personalized demo after the conference.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <div className="text-white font-bold text-xl">CLARA AI</div>
          <div className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
            🔴 Live at NFPA Expo 2025
          </div>
        </div>
        <div className="text-right text-white">
          <div className="font-semibold">Visit us at Booth #1457</div>
          <div className="text-sm text-slate-300">Live AI Demo Available</div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Clara Voice
              </h1>
              <p className="text-xl text-slate-300 mb-2">by Clara AI</p>
              
              <h2 className="text-3xl font-bold text-white mb-6">
                The Only <span className="text-red-500">AI Voice Agent</span> Fire & Life Safety Businesses Need
              </h2>
              
              <p className="text-lg text-slate-300 mb-8">
                Experience Clara Voice live! Get a call within a minute to have a real conversation and see its capabilities firsthand. Your AI voice agent will be fully customized to handle fire inspections, emergency calls, compliance checks, and customer service for your fire & life safety business.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Never Miss a Critical Call Again</h3>
                      <p className="text-slate-300 text-sm">
                        Fire inspection requests often come at high-stakes moments. Clara Voice ensures every call — even after-hours or during site visits — is answered instantly, professionally, and routed with urgency. No more voicemails. No lost jobs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">🧠</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Smarter Conversations, Not Just Call Taking</h3>
                      <p className="text-slate-300 text-sm">
                        Clara Voice does more than answer calls — it understands context. Whether it's an inspection report request, a service emergency, or a new job inquiry, our AI gathers accurate details and books directly into your workflow (like ZenFire).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">💰</div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Cut Costs, Not Customer Experience</h3>
                      <p className="text-slate-300 text-sm">
                        Replace expensive answering services with an AI agent that works 24/7, scales with you, and costs a fraction of what you're paying today — while delivering a consistent, branded customer experience every time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:sticky lg:top-8">
            <Card className="bg-slate-800/90 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-center text-2xl">
                  Talk to Clara Voice!
                </CardTitle>
                <p className="text-slate-300 text-center">
                  Get a live demo call and experience Clara Voice in action
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="ABC Fire Protection Services"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@abcfire.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label htmlFor="agentType" className="text-white">AI Voice Agent Type</Label>
                  <Select value={formData.agentType} onValueChange={(value) => handleInputChange('agentType', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="Customer Service Representative">Customer Service Representative</SelectItem>
                      <SelectItem value="Fire Inspector">Fire Inspector</SelectItem>
                      <SelectItem value="Emergency Response">Emergency Response</SelectItem>
                      <SelectItem value="Sales Agent">Sales Agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  onClick={triggerCall}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                  disabled={isCallTriggered}
                >
                  <PhoneCall className="mr-2" />
                  {isCallTriggered ? 'Call Initiated!' : 'Call me now!'}
                </Button>

                {isCallTriggered && (
                  <div className="mt-6 p-4 bg-green-900/30 border border-green-600 rounded-lg">
                    <p className="text-green-300 text-center mb-4">
                      🎉 Great! Clara Voice will call you shortly. Want to schedule a follow-up meeting after the conference?
                    </p>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full border-green-600 text-green-300 hover:bg-green-900/50">
                          <Calendar className="mr-2" />
                          Schedule Follow-up Meeting
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-800 border-slate-700">
                        <DialogHeader>
                          <DialogTitle className="text-white">Schedule a Follow-up Meeting</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="preferredDate" className="text-white">Preferred Date</Label>
                            <Input
                              id="preferredDate"
                              type="date"
                              value={meetingData.preferredDate}
                              onChange={(e) => handleMeetingInputChange('preferredDate', e.target.value)}
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <div>
                            <Label htmlFor="preferredTime" className="text-white">Preferred Time</Label>
                            <Select value={meetingData.preferredTime} onValueChange={(value) => handleMeetingInputChange('preferredTime', value)}>
                              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-700 border-slate-600">
                                <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                                <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                                <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                                <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="notes" className="text-white">Additional Notes</Label>
                            <Input
                              id="notes"
                              placeholder="Any specific topics you'd like to discuss..."
                              value={meetingData.notes}
                              onChange={(e) => handleMeetingInputChange('notes', e.target.value)}
                              className="bg-slate-700 border-slate-600 text-white"
                            />
                          </div>
                          <Button
                            onClick={submitMeetingRequest}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
                          >
                            Submit Meeting Request
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
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
