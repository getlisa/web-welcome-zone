
export const openHubSpotForm = () => {
  // Enhanced cleanup function that's more targeted
  const cleanupOrphanedElements = () => {
    console.log('Cleaning up orphaned HubSpot elements...');
    
    // Remove any existing modal overlays first
    const existingModal = document.getElementById('hubspot-modal-overlay');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Only clean up orphaned elements that are not part of footer or existing modals
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      if (child.id !== 'root' && 
          child.id !== 'hubspot-modal-overlay' &&
          child.id !== 'agent-modal-overlay' &&
          !child.closest('#root') &&
          !child.closest('#footer-hubspot-form') &&
          (child.innerHTML?.includes('hsfc-') || 
           child.innerHTML?.includes('hs-form') ||
           child.classList?.contains('hs-form'))) {
        console.log('Removing orphaned HubSpot element:', child);
        child.remove();
      }
    });
  };

  // Clean up any existing elements first
  cleanupOrphanedElements();

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'hubspot-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.id = 'hubspot-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 20px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    z-index: 100000;
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    z-index: 100001;
  `;

  // Create HubSpot form container
  const formContainer = document.createElement('div');
  formContainer.id = 'modal-hubspot-form-container';

  // Enhanced modal close function
  const closeModal = () => {
    console.log('Closing HubSpot modal...');
    
    // Remove the modal overlay
    const modalOverlay = document.getElementById('hubspot-modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
    
    // Clean up any orphaned HubSpot elements, but preserve footer form
    setTimeout(() => {
      cleanupOrphanedElements();
    }, 100);
    
    document.body.style.overflow = 'auto';
  };

  // Add event listeners
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add to DOM
  document.body.appendChild(overlay);

  // Initialize HubSpot form with better error handling and timing
  const initializeForm = () => {
    if (window.hbspt && window.hbspt.forms) {
      console.log('Initializing HubSpot form in modal...');
      
      try {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45865556',
          formId: 'c3428dcb-b18c-4277-b463-b7869c42800f',
          target: formContainer,
          onFormReady: () => {
            console.log('HubSpot modal form ready');
            // Ensure proper styling
            const form = formContainer.querySelector('.hs-form') as HTMLElement;
            if (form) {
              form.style.cssText = `
                max-width: 100%;
                overflow: visible;
                position: relative;
                z-index: 1;
              `;
            }
          },
          onFormSubmitted: () => {
            console.log('HubSpot modal form submitted');
            setTimeout(closeModal, 2000);
          },
          onFormDefinitionFetchError: (error: any) => {
            console.error('HubSpot form fetch error:', error);
          }
        });
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        // Show fallback message
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center;">Unable to load form. Please try again later.</p>';
      }
    } else {
      console.log('HubSpot script not ready, retrying...');
      setTimeout(initializeForm, 500);
    }
  };

  // Try to initialize form after a short delay to ensure modal is rendered
  setTimeout(initializeForm, 100);
};

export const openAgentForm = () => {
  // Enhanced cleanup function that's more targeted
  const cleanupOrphanedElements = () => {
    console.log('Cleaning up orphaned Agent HubSpot elements...');
    
    // Remove any existing modal overlays first
    const existingModal = document.getElementById('agent-modal-overlay');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Only clean up orphaned elements that are not part of footer or existing modals
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      if (child.id !== 'root' && 
          child.id !== 'hubspot-modal-overlay' &&
          child.id !== 'agent-modal-overlay' &&
          !child.closest('#root') &&
          !child.closest('#footer-hubspot-form') &&
          (child.innerHTML?.includes('hsfc-') || 
           child.innerHTML?.includes('hs-form') ||
           child.classList?.contains('hs-form'))) {
        console.log('Removing orphaned Agent HubSpot element:', child);
        child.remove();
      }
    });
  };

  // Clean up any existing elements first
  cleanupOrphanedElements();

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'agent-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.id = 'agent-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 20px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    z-index: 100000;
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    z-index: 100001;
  `;

  // Create HubSpot form container
  const formContainer = document.createElement('div');
  formContainer.id = 'agent-hubspot-form-container';

  // Enhanced modal close function
  const closeModal = () => {
    console.log('Closing Agent HubSpot modal...');
    
    // Remove the modal overlay
    const modalOverlay = document.getElementById('agent-modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
    
    // Clean up any orphaned HubSpot elements, but preserve footer form
    setTimeout(() => {
      cleanupOrphanedElements();
    }, 100);
    
    document.body.style.overflow = 'auto';
  };

  // Add event listeners
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add to DOM
  document.body.appendChild(overlay);

  // Initialize HubSpot form with better error handling and timing
  const initializeForm = () => {
    if (window.hbspt && window.hbspt.forms) {
      console.log('Initializing Agent HubSpot form in modal...');
      
      try {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45865556',
          formId: 'be1824d6-c6db-41c7-8b17-62e65b7f5662',
          target: formContainer,
          onFormReady: () => {
            console.log('Agent HubSpot form ready');
            // Ensure proper styling
            const form = formContainer.querySelector('.hs-form') as HTMLElement;
            if (form) {
              form.style.cssText = `
                max-width: 100%;
                overflow: visible;
                position: relative;
                z-index: 1;
              `;
            }
          },
          onFormSubmitted: () => {
            console.log('Agent HubSpot form submitted');
            setTimeout(closeModal, 2000);
          },
          onFormDefinitionFetchError: (error: any) => {
            console.error('Agent HubSpot form fetch error:', error);
          }
        });
      } catch (error) {
        console.error('Error creating Agent HubSpot form:', error);
        // Show fallback message
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center;">Unable to load form. Please try again later.</p>';
      }
    } else {
      console.log('HubSpot script not ready for Agent form, retrying...');
      setTimeout(initializeForm, 500);
    }
  };

  // Try to initialize form after a short delay to ensure modal is rendered
  setTimeout(initializeForm, 100);
};
