import React, { useState, useEffect } from 'react';
import '../css/form.css';
import Project from './project';
import Filter from './filter';
import Queue from './queue';
import Corpus from './corpus';
import Section from './section';
import Block from './block';
import Stage from './works_stage';
import Sets from './sets';
import Work from './work';
import People from './people';
import INN from './inn';
import Start from './startdate';
import End from './enddate';
import Floor from './floor';
import Btn from './button';
import BtnAll from './allselectedbtn';
import Person from './person';
import Grid from './grid';
import Checkbox from './checkbox';
import JSONDATA from '../data/names.json';
const Form = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedQueue, setSelectedQueue] = useState(null);
  const [selectedCorpus, setSelectedCorpus] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedStage, setSelectedStage] = useState(null);
  const [selectedSets, setSelectedSets] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedStart, setSelectedStart] = useState(null);
  const [selectedEnd, setSelectedEnd] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [formValues, setFormValues] = useState(null);
  const [selectedINN, setSelectedINN] = useState('');
  const [selectedPeople, setSelectedPeople] = useState('');
  const [selectedPerson, setSelectedPerson] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [test, setTest] = useState(null);
  const handleSaveButtonClick = () => {
    const formData = {
      selectedProject,
      selectedQueue,
      selectedCorpus,
      selectedSection,
      selectedBlock,
      selectedStage,
      selectedSets,
      selectedWork,
      selectedPeople,
      selectedStart,
      selectedEnd,
      selectedFloor,
      selectedINN,
    };

    localStorage.setItem('formValues', JSON.stringify(formData));

    setSelectedProject(null);
    setSelectedQueue(null);
    setSelectedCorpus(null);
    setSelectedSection(null);
    setSelectedBlock(null);
    setSelectedStage(null);
    setSelectedSets(null);
    setSelectedWork(null);
    setSelectedPeople('');
    setSelectedStart(null);
    setSelectedFloor(null);
    setSelectedEnd(null);
    setSelectedINN('');
    setFormValues(formData);
  };

  useEffect(() => {
    const storedFormValues = localStorage.getItem('formValues');
    if (storedFormValues) {
      try {
        const parsedFormValues = JSON.parse(storedFormValues);
        setFormValues(parsedFormValues);
      } catch (error) {
        console.error('Error parsing form values from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    try {
      const serializedFormValues = JSON.stringify(formValues);
      localStorage.setItem('formValues', serializedFormValues);
    } catch (error) {
      console.error('Error serializing form values to localStorage:', error);
    }
  }, [formValues]);

  const updateOptions = (project) => {
    const queues = JSONDATA[0].filter((item) => item.project === project).map((item) => item.queue);
    const uniqueQueues = Array.from(new Set(queues));

    setSelectedQueue(null);
    setSelectedCorpus(null);
    setSelectedFloor(null); // Reset selected floor when project changes
    setSelectedSection(null); // Reset selected floor when project changes
    setSelectedBlock(null); // Reset selected floor when project changes
    setSelectedStage(null); // Reset selected floor when project changes
    setSelectedSets(null); // Reset selected floor when project changes
    setSelectedWork(null); // Reset selected floor when project changes

    setQueueOptions(
      uniqueQueues.map((queue) => ({
        value: queue,
        label: queue,
      }))
    );

    setCorpusOptions([]);
  };

  const handleProjectChange = (value) => {
    console.log(`selected project: ${value}`);
    setSelectedProject(value);
    updateOptions(value);
  };

  const handleQueueChange = (value) => {
    console.log(`selected queue: ${value}`);
    setSelectedQueue(value);
    setSelectedFloor(null); 
    setSelectedSection(null); 
    setSelectedBlock(null); 
    setSelectedStage(null); 
    setSelectedSets(null); 
    setSelectedWork(null); 

    const corpi = JSONDATA[0]
      .filter((item) => item.project === selectedProject && item.queue === value)
      .map((item) => item.corpus);
    const uniqueCorpi = Array.from(new Set(corpi));

    setSelectedCorpus(null);

    setCorpusOptions(
      uniqueCorpi.map((corpus) => ({
        value: corpus,
        label: corpus,
      }))
    );
  };

  const handleCorpusChange = (value) => {
    console.log(`selected corpus: ${value}`);
    setSelectedCorpus(value);
    setSelectedFloor(null); 
    setSelectedSection(null);
    setSelectedBlock(null);
    setSelectedStage(null);
    setSelectedSets(null);
    setSelectedWork(null);
  };

  const handleFloorChange = (value) => {
    console.log(`selected floor: ${value}`);
    setSelectedFloor(value);
  };
 
  const handleFilterButtonClick = () => {
    const testdata = 
[{
  Проект: selectedProject,
  Очередь: selectedQueue,
  Корпус: selectedCorpus,
  Секция: selectedSection,
  Этаж: selectedFloor,
  'Этап Работы': selectedStage,
  'Комплекс работ': selectedBlock,
  'Вид работ': selectedSets,
  Работа: selectedWork,
  Исполнитель: <People />,
  ИНН: <INN />,
  'Дата назначения': <Start />,
  'Дата снятия': <End />
}]

    const filters = {
      selectedProject,
      selectedQueue,
      selectedCorpus,
      selectedSection,
      selectedBlock,
      selectedStage,
      selectedSets,
      selectedWork,
    };
    setSelectedFilters(filters);
    // const filteredData = JSONDATA[0].filter((item) => {
    //   return (
    //     item.project === filters.selectedProject &&
    //     item.queue === filters.selectedQueue &&
    //     item.corpus === filters.selectedCorpus &&
    //     item.section === filters.selectedSection &&
    //     item.block === filters.selectedBlock &&
    //     item.works_stage === filters.selectedStage &&
    //     item.works_set === filters.selectedSets &&
    //     item.works === filters.selectedWork
    //   );
    // });
    setFilteredData(testdata);
  };
  
  
  
  
  const handleSectionChange = (value) => {
    console.log(`selected section: ${value}`);
    setSelectedSection(value);
  };
  const handleBlockChange = (value) => {
    console.log(`selected block: ${value}`);
    setSelectedBlock(value);
  };
  const handleStageChange = (value) => {
    console.log(`selected block: ${value}`);
    setSelectedStage(value);
  };
  const handleSetsChange = (value) => {
    console.log(`selected block: ${value}`);
    setSelectedSets(value);
  };
  const handleWorkChange = (value) => {
    console.log(`selected block: ${value}`);
    setSelectedWork(value);
  };
  const projectOptions = Array.from(new Set(JSONDATA[0].map((item) => item.project))).map((project) => ({
    value: project,
    label: project,
  }));

  const [queueOptions, setQueueOptions] = useState([]);
  const [corpusOptions, setCorpusOptions] = useState([]);
  const [floorOptions, setFloorOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [blockOptions, setBlockOptions] = useState([]);
  const [stageOptions, setStageOptions] = useState([]);
  const [setsOptions, setSetsOptions] = useState([]);
  const [workOptions, setWorkOptions] = useState([]);
  useEffect(() => {
    if (selectedProject && selectedQueue && selectedCorpus) {
      const floors = JSONDATA[0]
        .filter((item) => item.project === selectedProject && item.queue === selectedQueue && item.corpus === selectedCorpus)
        .map((item) => item.floor);
      const uniqueFloors = Array.from(new Set(floors));

      setSelectedFloor(null);

      setFloorOptions(
        uniqueFloors.map((floor) => ({
          value: floor,
          label: floor,
        }))
      );
    } else {
      setFloorOptions([]);
    }
  }, [selectedProject, selectedQueue, selectedCorpus]);

  useEffect(() => {
    if (selectedProject && selectedQueue && selectedCorpus) {
      const sections = JSONDATA[0]
        .filter((item) => item.project === selectedProject && item.queue === selectedQueue && item.corpus === selectedCorpus)
        .map((item) => item.section);
      const uniqueSection = Array.from(new Set(sections));

      setSelectedSection(null);

      setSectionOptions(
        uniqueSection.map((section) => ({
          value: section,
          label: section,
        }))
      );
    } else {
      setSectionOptions([]);
    }
  }, [selectedProject, selectedQueue, selectedCorpus]);
  useEffect(() => {
    if (selectedProject && selectedQueue && selectedCorpus) {
      const block = JSONDATA[0]
        .filter((item) => item.project === selectedProject && item.queue === selectedQueue && item.corpus === selectedCorpus)
        .map((item) => item.block);
      const uniqueBlock = Array.from(new Set(block));

      setSelectedBlock(null);

      setBlockOptions(
        uniqueBlock.map((block) => ({
          value: block,
          label: block,
        }))
      );
    } else {
      setBlockOptions([]);
    }
  }, [selectedProject, selectedQueue, selectedCorpus]);
  useEffect(() => {
    if (selectedProject && selectedQueue && selectedCorpus) {
      const stage = JSONDATA[0]
        .filter((item) => item.project === selectedProject && item.queue === selectedQueue && item.corpus === selectedCorpus)
        .map((item) => item.works_stage);
      const uniqueStage = Array.from(new Set(stage));

      setSelectedStage(null);

      setStageOptions(
        uniqueStage.map((works_stage) => ({
          value: works_stage,
          label: works_stage,
        }))
      );
    } else {
      setStageOptions([]);
    }
  }, [selectedProject, selectedQueue, selectedCorpus]);
  useEffect(() => {
    if (selectedProject && selectedQueue && selectedCorpus) {
      const sets = JSONDATA[0]
        .filter((item) => item.project === selectedProject && item.queue === selectedQueue && item.corpus === selectedCorpus)
        .map((item) => item.works_set);
      const uniqueSets = Array.from(new Set(sets));

      setSelectedSets(null);

      setSetsOptions(
        uniqueSets.map((works_set) => ({
          value: works_set,
          label: works_set,
        }))
      );
    } else {
      setSetsOptions([]);
    }
  }, [selectedProject, selectedQueue, selectedCorpus]);
  useEffect(() => {
    if (selectedProject && selectedQueue && selectedCorpus) {
      const work = JSONDATA[0]
        .filter((item) => item.project === selectedProject && item.queue === selectedQueue && item.corpus === selectedCorpus)
        .map((item) => item.works);
      const uniqueWork = Array.from(new Set(work));

      setSelectedWork(null);

      setWorkOptions(
        uniqueWork.map((works) => ({
          value: works,
          label: works,
        }))
      );
    } else {
      setWorkOptions([]);
    }
  }, [selectedProject, selectedQueue, selectedCorpus]);
 
  return (
    <div className="form">
      <div className="forms">
        <div className="filtersform">
          <Project
            setSelectedProject={handleProjectChange}
            options={projectOptions}
          />
          <Queue setSelectedQueue={handleQueueChange} options={queueOptions} />
          <Corpus
            setSelectedCorpus={handleCorpusChange}
            options={corpusOptions}
          />
          <Section
            setSelectedSection={handleSectionChange}
            options={sectionOptions}
          />
          <Floor setSelectedFloor={handleFloorChange} options={floorOptions} />
          <Block setSelectedBlock={handleBlockChange} options={blockOptions} />
          <Stage setSelectedStage={handleStageChange} options={stageOptions} />
          <Sets setSelectedSets={handleSetsChange} options={setsOptions} />
          <Work setSelectedWork={handleWorkChange} options={workOptions} />
          <Person setSelectedPerson={selectedPerson} />
        </div>
        <div className="checkboxform">
          <Checkbox />
          <Filter onClick={handleFilterButtonClick} />
        </div>
      </div>
      {/* <People setSelectedPeople={setSelectedPeople} />
        {selectedPeople && (
          <INN
            selectedPeople={selectedPeople}
            selectedINN={selectedINN}
            setSelectedINN={setSelectedINN}
          />
        )}
        <Start setSelectedStart={setSelectedStart} />
        <End setSelectedEnd={setSelectedEnd} /> */}
        <div  className="all">
        <BtnAll/>
        </div>
      <Grid rowData={filteredData} />

      <div className="buttons">
        <Btn onClick={handleSaveButtonClick} />
        
      </div>
    </div>
  );
};

export default Form;







