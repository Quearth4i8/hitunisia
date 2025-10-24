// src/app/certificates/certificates.data.ts
export interface Certificate {
  id: string; // Unique identifier (e.g., 'faten-alayete')
  participantName: string; // Participant's full name
  certificateImagePath: string; // Path to the certificate image file
}

// Static data mapping IDs to image paths
export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'faten-alayete',
    participantName: 'Faten Alayete',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
  {
    id: 'marzouk-takwa',
    participantName: 'Marzouk Takwa',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg' 
  },
  {
    id: 'mohamed-aziz-sahnoun',
    participantName: 'Mohamed Aziz Sahnoun',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
  {
    id: 'ayham-naili',
    participantName: 'Ayham Naili',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'mohamed-amine-ouerfelli',
    participantName: 'Mohamed Amine Ouerfelli',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg' 
  },
   {
    id: 'elmehdi-dridi',
    participantName: 'El Mehdi Dridi',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'amir-abdellaoui',
    participantName: 'Amir Abdellaoui',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'nour-el-ain-boussaffa',
    participantName: 'Nour el ain Boussaffa',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'rayen-souissi',
    participantName: 'Rayen Souissi',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'aziz-bjaoui',
    participantName: 'Aziz Bjaoui',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'louay-kaltoum',
    participantName: 'Louay Kaltoum',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
   {
    id: 'youssef-grayaa',
    participantName: 'Youssef Grayaa',
    certificateImagePath: 'assets/certificates/faten-alayete-cert.jpg'
  },
];