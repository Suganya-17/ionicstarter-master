import './ExploreContainer.css';
import { 
  IonCol, 
  IonGrid, 
  IonRow ,
  IonItem, 
  IonLabel, 
  IonList, 
  IonListHeader,
  IonSelect, 
  IonSelectOption,
  IonProgressBar} from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid >
       <IonRow >
          <IonCol size="1" className ='column1-styling '>
          <IonList className='list1'>
        <IonListHeader className='list-header-styling'>
          <IonLabel color ='dark'>Piers</IonLabel>
        </IonListHeader>
        <IonItem lines='none'className = "item-styling">
          <IonLabel color ='dark' >74542</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>74344</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75365</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75671</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75671</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75671</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75671</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75671</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>75671</IonLabel>
        </IonItem>
      </IonList>
          </IonCol>
          <IonCol size="1" className ='column1-styling '>
            <IonList className='list1'>
        <IonListHeader className='list-header-styling'>
          <IonLabel color ='dark'>TTs</IonLabel>
        </IonListHeader>
        <IonItem lines='none'className = "item-styling item-styling2">
          <IonLabel color ='dark' >44401</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling item-styling3">
          <IonLabel color ='dark'>44401</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling item-styling4">
          <IonLabel color ='dark'>44401</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling ">
          <IonLabel color ='dark'>44401</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling">
          <IonLabel color ='dark'>42434</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling ">
          <IonLabel color ='dark'>44434</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling ">
          <IonLabel color ='dark'>44434</IonLabel>
        </IonItem>
        <IonItem lines='none' className = "item-styling item-styling5">
          <IonLabel color ='dark'>44434</IonLabel>
        </IonItem>
      </IonList>
      </IonCol>
      <IonCol size="10" > 
      <h3 className='list-heading'>Block 1, Section 2, Row 36</h3>
      <p className='list-subheading '>87 Module Hybrid Edge / Interior tracker</p>
      <hr className='horizontal-line'/>

      <IonList className='list-size'>
      <IonListHeader >
        <IonLabel className='list-item' >Activity/Sub-activity</IonLabel>
        <IonLabel className='list-item ' >% Weight</IonLabel>
        <IonLabel className='list-item'>Status</IonLabel>
        <IonLabel className='list-item list-item-align'>Progress</IonLabel>
      </IonListHeader>
      <IonItem className='list-item-styling '>
        <IonLabel>Piling</IonLabel>
        <IonLabel >20%</IonLabel>
        <IonList>
      <IonItem lines='none' className='select-alignment' >
        <IonSelect placeholder="Select Status ">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonProgressBar value={.50} color="danger" type="determinate" className='progressbar-styling'></IonProgressBar>
    <p className='progress-text-styling'>50%</p>
      </IonItem>
      <IonItem className='list-item-styling'>
        <IonLabel className='activity-styling'>Tracker components distribution</IonLabel>
        <IonLabel >40%</IonLabel>
        <IonList>
      <IonItem lines='none' className='select-alignment'>
        <IonSelect placeholder="Select Status ">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonProgressBar value={.50} color="danger" type="determinate" className='progressbar-styling'></IonProgressBar>
    <p className='progress-text-styling'>50%</p>
      </IonItem>
      <IonItem className='list-item-styling'>
      <IonLabel>Tracker components distribution</IonLabel>
      <IonLabel >40%</IonLabel>
      <IonList>
      <IonItem lines='none'  className='select-alignment'>
        <IonSelect placeholder="Select Status ">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonProgressBar value={.50} color="danger" type="determinate" className='progressbar-styling'></IonProgressBar>
    <p className='progress-text-styling'>50%</p>
      </IonItem>
      <IonItem className=' list-item-styling'>
      <IonLabel>Tracker components distribution</IonLabel>
      <IonLabel >40%</IonLabel>
      <IonList>
      <IonItem lines='none' className='select-alignment'>
        <IonSelect placeholder="Select Status ">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonProgressBar value={.10} color="danger" type="determinate" className='progressbar-styling'></IonProgressBar>
    <p className='progress-text-styling'>10%</p>
      </IonItem>
      <IonItem className='list-item-styling'>
      <IonLabel>Tracker components distribution</IonLabel>
      <IonLabel>40%</IonLabel>
      <IonList>
      <IonItem lines='none' className='select-alignment'>
        <IonSelect placeholder="Select Status">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
    <IonProgressBar value={.10} color="danger" type="determinate" className='progressbar-styling'> 10%</IonProgressBar>
    <p className='progress-text-styling'>10%</p>
      </IonItem>
      <IonItem className='list-item-styling'>
      <IonLabel>Surveying</IonLabel>
      <IonLabel className='list-percentage-style'>5%</IonLabel>
      <IonList>
      <IonItem lines='none' className='select-styling'>
        <IonSelect placeholder="Select Status ">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
      </IonItem>
      <IonItem className=' list-item-styling'>
      <IonLabel>Surveying</IonLabel>
      <IonLabel className='list-percentage-style'>5%</IonLabel>
      <IonList>
      <IonItem lines='none' className='select-styling'>
        <IonSelect placeholder="Select Status ">
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
      </IonItem>
      <IonItem className=' list-item-styling'>
      <IonLabel>Surveying</IonLabel>
      <IonLabel className='list-percentage-style'>5%</IonLabel>
      <IonList>
      <IonItem lines='none' className='select-styling'>
        <IonSelect placeholder="Select Status" >
          <IonSelectOption value="not-started"  >Not Started</IonSelectOption>
          <IonSelectOption value="progress" >Progress</IonSelectOption>
          <IonSelectOption value="completed" >Completed</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
      </IonItem>
    </IonList>
          </IonCol> 
        </IonRow>
      </IonGrid>

  );
};

export default ExploreContainer;
