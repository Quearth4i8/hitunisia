export interface Certificate {
  id: string;
  participantName: string;
  certificateImagePath: string;
  
  dateOfBirth: string;
  placeOfBirth: string;
  phoneNumber: string;
  emailAddress: string;
  currentStatus: string;
  institution: string;
  fieldOfStudy: string;
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'faten-alayete',
    participantName: 'Faten Alayete',
    certificateImagePath: 'assets/certificates/faten-alayete-certif.png',
    dateOfBirth: '05/09/1997',
    placeOfBirth: 'Jendouba',
    phoneNumber: '55-657-899 ',
    emailAddress: 'faten.alayete@gmail.com',
    currentStatus: 'Student',
    institution: 'Institut supérieur de la science de mer',
    fieldOfStudy: 'Sustainable development'
  },
  {
    id: 'marzouk-takwa',
    participantName: 'Marzouk Takwa',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '10/09/1990',
    placeOfBirth: 'Kairouan',
    phoneNumber: '53-958-358',
    emailAddress: 'takwa.marzouk@cbbc.rnrt.tn',
    currentStatus: 'Researcher',
    institution: 'Centre of Biotechnology of Borj Cedria',
    fieldOfStudy: 'Sustainable development'
  },
  {
    id: 'mohamed-aziz-sahnoun',
    participantName: 'Mohamed Aziz Sahnoun',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '06/10/1998',
    placeOfBirth: 'Tunis, Tunisia',
    phoneNumber: '58-411-972',
    emailAddress: 'mohamedaziz.sahnoun@gmail.com',
    currentStatus: 'Professional',
    institution: 'Save Your Wardrobe',
    fieldOfStudy: 'Software engineer'
  },
  {
    id: 'ayham-naili',
    participantName: 'Ayham Naili',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '06/01/2005',
    placeOfBirth: 'Tunisia',
    phoneNumber: '27-676-711',
    emailAddress: 'ayham.naili@edu.isetcom.tn',
    currentStatus: 'Student',
    institution: 'Higher Institute of Technological Studies in Communications of Tunis',
    fieldOfStudy: 'Information and Communication Sciences and Technologies'
  },
  {
    id: 'mohamed-amine-ouerfelli',
    participantName: 'Mohamed Amine Ouerfelli',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '17/01/2003',
    placeOfBirth: 'KEF',
    phoneNumber: '27-147-622',
    emailAddress: 'Mohamedamineouerfelli27@gmail.com',
    currentStatus: 'Student',
    institution: 'Isetcom',
    fieldOfStudy: 'Networks Security'
  },
  {
    id: 'elmehdi-dridi',
    participantName: 'El Mehdi Dridi',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '19/05/2004',
    placeOfBirth: 'Tunis',
    phoneNumber: '27-519-943',
    emailAddress: 'Elmehdi.dridi@edu.isetcom.tn',
    currentStatus: 'Student',
    institution: 'Isetcom',
    fieldOfStudy: 'ICT'
  },
  {
    id: 'amir-abdellaoui',
    participantName: 'Amir Abdellaoui',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '11/12/2001',
    placeOfBirth: 'Gafsa',
    phoneNumber: '25-287-122',
    emailAddress: 'abdellaouiamir27@gmail.com',
    currentStatus: 'Student',
    institution: 'Higher Institute of Applied Science and Technology of Sousse',
    fieldOfStudy: 'Software engineering'
  },
  {
    id: 'nour-el-ain-boussaffa',
    participantName: 'Nour el ain Boussaffa',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '19/03/2001',
    placeOfBirth: 'Sfax',
    phoneNumber: '29-464-055',
    emailAddress: 'bnourelain@gmail.com',
    currentStatus: 'Student',
    institution: 'ENSTAB',
    fieldOfStudy: 'Computer science/innovation and technology transfert'
  },
  {
    id: 'rayen-souissi',
    participantName: 'Rayen Souissi',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '05/07/2001',
    placeOfBirth: 'Kairouan, marsa',
    phoneNumber: '53-222-485',
    emailAddress: 'rayensouissi0@gmail.com',
    currentStatus: 'Professional',
    institution: "Institut Supérieur d'Informatique et de Gestion de Kairouan",
    fieldOfStudy: 'Software Engineering'
  },
  {
    id: 'aziz-bjaoui',
    participantName: 'Aziz Bjaoui',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '12/02/1998',
    placeOfBirth: 'Tunisie',
    phoneNumber: '509-410-83',
    emailAddress: 'bqjbojaziz@gmail.com',
    currentStatus: 'Student',
    institution: 'INSTM',
    fieldOfStudy: 'Informatique'
  },
  {
    id: 'louay-kaltoum',
    participantName: 'Louay Kaltoum',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '19/04/2004',
    placeOfBirth: 'Tunisia',
    phoneNumber: '29-847-883',
    emailAddress: 'louayykaltoum@gmail.com',
    currentStatus: 'Student',
    institution: 'Isetcom',
    fieldOfStudy: 'Network security'
  },
  {
    id: 'youssef-grayaa',
    participantName: 'Youssef Grayaa',
    certificateImagePath: 'assets/certificates/basic-certif.jpg',
    dateOfBirth: '26/01/2004',
    placeOfBirth: 'Gafsa',
    phoneNumber: '51-872-242',
    emailAddress: 'youssef.grayaa@edu.isetcom.tn',
    currentStatus: 'Student',
    institution: 'Isetcom',
    fieldOfStudy: 'Network Security'
  },
];