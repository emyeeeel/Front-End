import { IonContent, IonHeader, IonTitle,  IonToolbar, } from '@ionic/react';

const Create: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Page</IonTitle>
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
          Create Page
        </div>
      </IonContent>
    </>
  );
};

export default Create;
