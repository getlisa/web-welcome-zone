
export const openHubSpotForm = () => {
  // Enhanced cleanup function that's more targeted
  const cleanupOrphanedElements = () => {
    console.log('Cleaning up orphaned HubSpot elements...');
    
    // Remove any existing modal overlays first
    const existingModal = document.getElementById('hubspot-modal-overlay');
    if (existingModal) {
      existingModal.remove();
    }
    
    // Clean up any HubSpot elements that are direct children of body (but preserve footer form)
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      const element = child as HTMLElement;
      if (element.id !== 'root' && 
          element.id !== 'hubspot-modal-overlay' &&
          element.id !== 'agent-modal-overlay' &&
          !element.closest('#root') &&
          !element.closest('#footer-hubspot-form') &&
          (element.innerHTML?.includes('hs-form') || 
           element.innerHTML?.includes('hsfc-') ||
           element.classList?.contains('hs-form') ||
           element.querySelector?.('.hs-form'))) {
        console.log('Removing orphaned HubSpot element:', element);
        element.remove();
      }
    });
  };

  // Clean up any existing elements first
  cleanupOrphanedElements();

  // Create modal overlay with very high z-index
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
    z-index: 999999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content with even higher z-index
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
    z-index: 9999999;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  `;

  // Create close button with highest z-index
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
    z-index: 99999999;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Create HubSpot form container
  const formContainer = document.createElement('div');
  formContainer.id = 'modal-hubspot-form-container';
  formContainer.style.cssText = `
    position: relative;
    z-index: 1;
    width: 100%;
  `;

  // Enhanced modal close function
  const closeModal = () => {
    console.log('Closing HubSpot modal...');
    
    // Remove the modal overlay
    const modalOverlay = document.getElementById('hubspot-modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
    
    // Clean up any orphaned HubSpot elements after a delay
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

  // Prevent clicks inside modal from closing it
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
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
          }
        });
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center;">Unable to load form. Please try again later.</p>';
      }
    } else {
      console.log('HubSpot script not ready, retrying...');
      setTimeout(initializeForm, 500);
    }
  };

  // Try to initialize form after a short delay to ensure modal is rendered
  setTimeout(initializeForm, 200);
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
    
    // Clean up any HubSpot elements that are direct children of body (but preserve footer form)
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      const element = child as HTMLElement;
      if (element.id !== 'root' && 
          element.id !== 'hubspot-modal-overlay' &&
          element.id !== 'agent-modal-overlay' &&
          !element.closest('#root') &&
          !element.closest('#footer-hubspot-form') &&
          (element.innerHTML?.includes('hs-form') || 
           element.innerHTML?.includes('hsfc-') ||
           element.classList?.contains('hs-form') ||
           element.querySelector?.('.hs-form'))) {
        console.log('Removing orphaned Agent HubSpot element:', element);
        element.remove();
      }
    });
  };

  // Clean up any existing elements first
  cleanupOrphanedElements();

  // Create modal overlay with very high z-index
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
    z-index: 999999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content with even higher z-index
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
    z-index: 9999999;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  `;

  // Create close button with highest z-index
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
    z-index: 99999999;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Create HubSpot form container
  const formContainer = document.createElement('div');
  formContainer.id = 'agent-hubspot-form-container';
  formContainer.style.cssText = `
    position: relative;
    z-index: 1;
    width: 100%;
  `;

  // Enhanced modal close function
  const closeModal = () => {
    console.log('Closing Agent HubSpot modal...');
    
    // Remove the modal overlay
    const modalOverlay = document.getElementById('agent-modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
    
    // Clean up any orphaned HubSpot elements after a delay
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

  // Prevent clicks inside modal from closing it
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
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
          }
        });
      } catch (error) {
        console.error('Error creating Agent HubSpot form:', error);
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center;">Unable to load form. Please try again later.</p>';
      }
    } else {
      console.log('HubSpot script not ready for Agent form, retrying...');
      setTimeout(initializeForm, 500);
    }
  };

  // Try to initialize form after a short delay to ensure modal is rendered
  setTimeout(initializeForm, 200);
};
