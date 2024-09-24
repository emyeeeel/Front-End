import { IonContent, IonHeader, IonTitle,  IonToolbar, } from '@ionic/react';

const Profile: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          Profile Page
        </div>
      </IonContent>
    </>
  );
};

export default Profile;
