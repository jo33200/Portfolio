import { useState } from 'react';
import PropTypes from 'prop-types'; // Importer PropTypes
import emailjs from 'emailjs-com';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_pdlwqc6',    
      'template_ds9z9rl',   
      formData,
      'Q-hXLrRhbwsCWFw1D'  
    ).then((result) => {
      console.log(result.text);
      setIsMessageSent(true);
      setTimeout(() => {
        setIsMessageSent(false);
        onClose();
      }, 3000);
    }, (error) => {
      console.log(error.text);
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50" onClick={handleBackdropClick}>
      <div className="bg-neutral-950 p-8 rounded-lg shadow-lg max-w-md w-full">
        {isMessageSent ? (
          <div className="text-green-500 text-center font-bold">
            ✅ Message envoyé avec succès!
          </div>
        ) : (
          <>
            <h2 className="text-gray-500 text-2xl font-bold mb-4">Contactez-moi</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-500">Nom</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="bg-neutral-950 text-gray-300 w-full p-2 border border-gray-500 rounded mt-1"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-500">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="bg-neutral-950 text-gray-300 w-full p-2 border border-gray-500 rounded mt-1"
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-500">Message</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  className="bg-neutral-950 text-gray-300 w-full p-2 border border-gray-500 rounded mt-1"
                  required 
                />
              </div>
              <div className="flex justify-end">
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="mr-4 bg-gray-500 text-white p-2 rounded"
                >
                  Annuler
                </button>
                <button 
                  type="submit" 
                  className="bg-blue-500 text-white p-2 rounded"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

ContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Définir le type des props
  onClose: PropTypes.func.isRequired
};

export default ContactModal;