import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 value : {
    name: 'Aditi',
    objective: 'Full Stack Engineer with a passion for creating robust and scalable web applications. Seeking a challenging position where I can leverage my expertise in both front-end and back-end technologies to contribute to the development and optimization of innovative software solutions.',
    phoneNo: '9818095566',
    email: 'aditijha1403@gmail.com',
    address: 'QutubMinar New delhi, 110030',
    education: [
      {
        degree: "Master",
        institute: "University of Palval",
        description: "faltu degree",
        startYear: "2021",
        endYear: "2023",
      },
      {
        degree: "Master",
        institute: "University of Palval",
        description: "",
        startYear: "2021",
        endYear: "2023",
      }
    ],
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
    }
  }
})

export const { update } = resumeDataSlice.actions

export default resumeDataSlice.reducer;