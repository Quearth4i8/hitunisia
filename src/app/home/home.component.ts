import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'مرحباً بكم في تونس';
  subtitle = 'Welcome to Tunisia';
  
  features = [
    {
      title: 'التراث الثقافي',
      english: 'Cultural Heritage',
      description: 'تونس غنية بالتراث الثقافي والتاريخي العريق',
      icon: '🏛️'
    },
    {
      title: 'الطبيعة الخلابة',
      english: 'Beautiful Nature',
      description: 'من الصحراء إلى البحر الأبيض المتوسط',
      icon: '🏖️'
    },
    {
      title: 'الضيافة التونسية',
      english: 'Tunisian Hospitality',
      description: 'شعب ودود ومضياف يتميز بالكرم',
      icon: '🤝'
    },
  ];

  cities = [
    { name: 'تونس', english: 'Tunis', description: 'العاصمة' },
    { name: 'سوسة', english: 'Sousse', description: 'مدينة الساحل' },
    { name: 'صفاقس', english: 'Sfax', description: 'العاصمة الاقتصادية' },
    { name: 'قابس', english: 'Gabes', description: 'بوابة الصحراء' }
  ];
}
