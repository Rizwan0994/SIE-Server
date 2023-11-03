import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

const GoogleAuthInitializer = () => {
  useEffect(() => {
    // Initialize the Google API client when the component mounts
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: 'YOUR_CLIENT_ID', // Replace with your Google OAuth client ID
        plugin_name: 'chat', // You can customize this as needed
      });
    });
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAuthInitializer;