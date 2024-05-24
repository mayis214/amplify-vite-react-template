import react,{useEffect} from 'react';
import 'amazon-connect-streams';

const CCPComponent: React.FC = () => {
    useEffect(() => {
      // Initialize the CCP
      (window as any).connect.core.initCCP(document.getElementById('ccp-container'), {
        ccpUrl: "https://turtlespizza.my.connect.aws/ccp-v2", // Replace with your CCP URL
        loginPopup: true,
        softphone: {
          allowFramedSoftphone: true,
        },
      });
  
      // Event handlers for the CCP can be added here
      (window as any).connect.contact((contact: any) => {
        console.log('New contact:', contact);
        if (contact.getType() === (window as any).connect.ContactType.CHAT) {
          console.log('Incoming chat from:', contact.getCustomerEndpoint().address);
        }
  
        contact.onConnected(() => {
          console.log('Chat connected');
        });
  
        contact.onEnded(() => {
          console.log('Chat ended');
        });
      });
    }, []);
  
    return (
      <div id="ccp-container" style={{ width: '400px', height: '600px' }}></div>
    );
  };
  
  export default CCPComponent;