
export const openHubSpotForm = () => {
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
  formContainer.className = 'hs-form-frame';

  // Enhanced cleanup function
  const closeModal = () => {
    console.log('Cleaning up HubSpot modal...');
    
    // Remove all HubSpot form related elements from the entire document
    const hsFormSelectors = [
      '.hs-form',
      '.hs-form-iframe', 
      '.submitted-message',
      '.hsfc-Step__Content',
      '.hsfc-Row',
      '.hsfc-TextField',
      '.hsfc-EmailField',
      '.hsfc-PhoneField',
      '.hsfc-ProgressBar',
      '.hsfc-NavigationRow',
      '.hsfc-Button',
      '[class*="hsfc-"]',
      '[data-hsfc-id]'
    ];
    
    hsFormSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Only remove if it's not part of the footer form
        if (!element.closest('#footer-hubspot-form')) {
          element.remove();
        }
      });
    });
    
    // Remove the modal overlay specifically
    const modalOverlay = document.getElementById('hubspot-modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
    
    // Clean up any orphaned elements at the end of body
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      // Remove any elements that contain HubSpot form content but are not our main app or modal
      if (child.id !== 'root' && 
          child.id !== 'hubspot-modal-overlay' && 
          !child.closest('#root') &&
          (child.innerHTML?.includes('hsfc-') || 
           child.innerHTML?.includes('First Name') ||
           child.innerHTML?.includes('Last Name') ||
           child.innerHTML?.includes('Email'))) {
        console.log('Removing orphaned HubSpot element:', child);
        child.remove();
      }
    });
    
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

  // Initialize HubSpot form if the script is loaded
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '45865556',
      formId: 'c3428dcb-b18c-4277-b463-b7869c42800f',
      target: formContainer,
      onFormReady: () => {
        console.log('HubSpot modal form ready');
      },
      onFormSubmitted: () => {
        console.log('HubSpot modal form submitted');
        // Close modal after successful submission
        setTimeout(closeModal, 2000);
      }
    });
  }
};

export const openAgentForm = () => {
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
  formContainer.className = 'hs-form-frame';

  // Enhanced cleanup function
  const closeModal = () => {
    console.log('Cleaning up Agent HubSpot modal...');
    
    // Remove all HubSpot form related elements from the entire document
    const hsFormSelectors = [
      '.hs-form',
      '.hs-form-iframe', 
      '.submitted-message',
      '.hsfc-Step__Content',
      '.hsfc-Row',
      '.hsfc-TextField',
      '.hsfc-EmailField',
      '.hsfc-PhoneField',
      '.hsfc-ProgressBar',
      '.hsfc-NavigationRow',
      '.hsfc-Button',
      '[class*="hsfc-"]',
      '[data-hsfc-id]'
    ];
    
    hsFormSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        // Only remove if it's not part of the footer form
        if (!element.closest('#footer-hubspot-form')) {
          element.remove();
        }
      });
    });
    
    // Remove the modal overlay specifically
    const modalOverlay = document.getElementById('agent-modal-overlay');
    if (modalOverlay) {
      modalOverlay.remove();
    }
    
    // Clean up any orphaned elements at the end of body
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(child => {
      // Remove any elements that contain HubSpot form content but are not our main app or modal
      if (child.id !== 'root' && 
          child.id !== 'agent-modal-overlay' && 
          !child.closest('#root') &&
          (child.innerHTML?.includes('hsfc-') || 
           child.innerHTML?.includes('First Name') ||
           child.innerHTML?.includes('Last Name') ||
           child.innerHTML?.includes('Email'))) {
        console.log('Removing orphaned Agent HubSpot element:', child);
        child.remove();
      }
    });
    
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

  // Initialize HubSpot form if the script is loaded
  if (window.hbspt) {
    window.hbspt.forms.create({
      region: 'na1',
      portalId: '45865556',
      formId: 'be1824d6-c6db-41c7-8b17-62e65b7f5662',
      target: formContainer,
      onFormReady: () => {
        console.log('Agent HubSpot form ready');
      },
      onFormSubmitted: () => {
        console.log('Agent HubSpot form submitted');
        // Close modal after successful submission
        setTimeout(closeModal, 2000);
      }
    });
  }
};
