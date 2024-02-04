import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 value : {
    firstname: '',
    lastname:'',
    website:'',
    twitter: 'https://twitter.com',
    linkedin: 'https://www.linkedin.com',
    github: 'https://github.com',

    objective: '',
    email: '',
    address: '',
    education: 
      {
        degree: "Master",
        institute: "University of Palval",
        description: "faltu degree",
        startYear: "2021",
        endYear: "2023",
      },
     
    
    skills: ['project management', 'Technical expertise', 'Leadership', 'Communication', 'Problem-solving', 'Attention to detail'],

    activities: ['Participated in several hackathons, including a winning team at the 20XX Hack event, demonstrating the ability to work under pressure and come up with innovative solutions to technical challenges. ', 'sleeping', 'drinking'],
    experience: [
      {
        position: "senior manager",
        company: "University of Palval",
        description: "Oversaw project scope, timelines, and budget, resulting in the successful launch of the new infrastructure and improved site reliability metrics",
        startYear: "2021",
        endYear: "2023",
      },
      {
        position: "Master",
        company: "University of Palval",
        description: "Managed a team of software developers and quality assurance specialists in the development and launch of a new customer relationship management (CRM) software product ",
        startYear: "2021",
        endYear: "2023",
      }
    ],
}
}

export const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    update: (state, action) => {
      const { name, value } = action.payload;
      state.value[name] = value 
    },
    // updateObj: (state, action) => {
    //   const { objName, name, value } = action.payload;
    //   Object.assign(state.value[objName], {name: value}); 

    //   console.log(state.value[objName][name], objName, name)
    // }
  }
})

export const { update, updateObj } = resumeDataSlice.actions

export default resumeDataSlice.reducer;