
export const openHubSpotForm = () => {
  // Create modal overlay
  const overlay = document.createElement('div');
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
    z-index: 9999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.style.cssText = `
    border-radius: 12px;
    padding: 20px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
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
    z-index: 10000;
  `;

  // Create HubSpot form container
  const formContainer = document.createElement('div');
  formContainer.className = 'hs-form-frame';
  formContainer.setAttribute('data-region', 'na1');
  formContainer.setAttribute('data-form-id', 'c3428dcb-b18c-4277-b463-b7869c42800f');
  formContainer.setAttribute('data-portal-id', '45865556');

  // Close modal function
  const closeModal = () => {
    document.body.removeChild(overlay);
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
      target: formContainer
    });
  }
};

export const openAgentForm = () => {
  // Create modal overlay
  const overlay = document.createElement('div');
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
    z-index: 9999;
    backdrop-filter: blur(5px);
  `;

  // Create modal content
  const modal = document.createElement('div');
  modal.style.cssText = `
    border-radius: 12px;
    padding: 20px;
    max-width: 900px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
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
    z-index: 10000;
  `;

  // Create HubSpot form container
  const formContainer = document.createElement('div');
  formContainer.className = 'hs-form-frame';
  formContainer.setAttribute('data-region', 'na1');
  formContainer.setAttribute('data-form-id', 'be1824d6-c6db-41c7-8b17-62e65b7f5662');
  formContainer.setAttribute('data-portal-id', '45865556');

  // Close modal function
  const closeModal = () => {
    document.body.removeChild(overlay);
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
      target: formContainer
    });
  }
};
