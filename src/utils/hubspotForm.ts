
export const openHubSpotForm = () => {
  // Remove any existing modals first
  const existingModal = document.getElementById('hubspot-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'hubspot-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.id = 'hubspot-modal-content';
  modal.style.cssText = `
   
    border-radius: 12px;
    padding: 40px 30px 30px 30px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #666;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
  `;

  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = '#f0f0f0';
  });

  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
  });

  // Create form container that will hold the HubSpot form
  const formContainer = document.createElement('div');
  formContainer.id = 'hubspot-form-target';
  formContainer.style.cssText = `
    width: 100%;
    min-height: 200px;
  `;

  // Close modal function
  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  // Event listeners
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Prevent modal content clicks from closing modal
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add modal to page
  document.body.appendChild(overlay);

  // Initialize HubSpot form after modal is in DOM
  const initializeHubSpotForm = () => {
    if (window.hbspt && window.hbspt.forms) {
      console.log('Creating HubSpot form in modal...');
      
      try {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45865556',
          formId: 'c3428dcb-b18c-4277-b463-b7869c42800f',
          target: '#hubspot-form-target',
          onFormReady: () => {
            console.log('HubSpot form is ready in modal');
          },
          onFormSubmitted: () => {
            console.log('HubSpot form submitted');
            // Close modal after successful submission
            setTimeout(() => {
              closeModal();
            }, 2000);
          }
        });
      } catch (error) {
        console.error('Error creating HubSpot form:', error);
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Unable to load form. Please try again later.</p>';
      }
    } else {
      console.log('HubSpot not ready, retrying...');
      setTimeout(initializeHubSpotForm, 500);
    }
  };

  // Wait a bit for modal to render, then initialize form
  setTimeout(initializeHubSpotForm, 300);
};

export const openAgentForm = () => {
  // Remove any existing modals first
  const existingModal = document.getElementById('agent-modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const overlay = document.createElement('div');
  overlay.id = 'agent-modal-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.id = 'agent-modal-content';
  modal.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 40px 30px 30px 30px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  `;

  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '×';
  closeButton.style.cssText = `
    position: absolute;
    top: 15px;
    right: 20px;
    background: none;
    border: none;
    font-size: 28px;
    cursor: pointer;
    color: #666;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
  `;

  closeButton.addEventListener('mouseenter', () => {
    closeButton.style.backgroundColor = '#f0f0f0';
  });

  closeButton.addEventListener('mouseleave', () => {
    closeButton.style.backgroundColor = 'transparent';
  });

  // Create form container that will hold the HubSpot form
  const formContainer = document.createElement('div');
  formContainer.id = 'agent-form-target';
  formContainer.style.cssText = `
    width: 100%;
    min-height: 200px;
  `;

  // Close modal function
  const closeModal = () => {
    overlay.remove();
    document.body.style.overflow = 'auto';
  };

  // Event listeners
  closeButton.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Prevent modal content clicks from closing modal
  modal.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Assemble modal
  modal.appendChild(closeButton);
  modal.appendChild(formContainer);
  overlay.appendChild(modal);

  // Prevent body scroll
  document.body.style.overflow = 'hidden';

  // Add modal to page
  document.body.appendChild(overlay);

  // Initialize HubSpot form after modal is in DOM
  const initializeHubSpotForm = () => {
    if (window.hbspt && window.hbspt.forms) {
      console.log('Creating Agent HubSpot form in modal...');
      
      try {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45865556',
          formId: 'be1824d6-c6db-41c7-8b17-62e65b7f5662',
          target: '#agent-form-target',
          onFormReady: () => {
            console.log('Agent HubSpot form is ready in modal');
          },
          onFormSubmitted: () => {
            console.log('Agent HubSpot form submitted');
            // Close modal after successful submission
            setTimeout(() => {
              closeModal();
            }, 2000);
          }
        });
      } catch (error) {
        console.error('Error creating Agent HubSpot form:', error);
        formContainer.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">Unable to load form. Please try again later.</p>';
      }
    } else {
      console.log('HubSpot not ready for Agent form, retrying...');
      setTimeout(initializeHubSpotForm, 500);
    }
  };

  // Wait a bit for modal to render, then initialize form
  setTimeout(initializeHubSpotForm, 300);
};
