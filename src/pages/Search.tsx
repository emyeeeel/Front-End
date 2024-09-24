import { IonContent, IonHeader, IonList, IonItem, IonLabel, IonImg, IonToolbar, IonSearchbar } from '@ionic/react';
import '../styles/Search.css';

const Search: React.FC = () => {
  return (
    <>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonSearchbar placeholder='Search'></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
          </IonItem>
          <IonItem>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
          </IonItem>
          <IonItem>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
          </IonItem>
          <IonItem>
            <IonImg
              src="https://docs-demo.ionic.io/assets/madison.jpg"
              alt="The Wisconsin State Capitol building in Madison, WI at night"
            ></IonImg>
          </IonItem>
        </IonList>
      </IonContent>
    </>
  );
};

export default Search;
