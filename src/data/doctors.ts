import { IDoctor, Education } from "@/library/doctors";

export const EducationList: Array<Education> = [
  {
    year: "Year(2005-2007)",
    degree: "MBBS, M.D at University of Wyoming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!",
  },
  {
    year: "Year(2007-2009)",
    degree: "MBBS, M.D at University of Wyoming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!",
  },
  {
    year: "Year(2009-2010)",
    degree: "MBBS, M.D at University of Wyoming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!",
  },
  {
    year: "Year(2010-2011)",
    degree: "MBBS, M.D at University of Wyoming",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque harum, mollitia, soluta maxime porro veritatis fuga autem impedit corrupti aperiam sint, architecto, error nesciunt temporibus! Vel quod, dolor aliquam!",
  },
];

export const ExpertiseList: Array<string> = [
  "International Drug Database",
  "Stretchers and Stretcher Accessories",
  "Cushions and Mattresses",
  "Cholesterol and lipid tests",
  "Critical Care Medicine Specialists",
  "Emergency Assistance",
];

const Doctors: IDoctor[] = [
  {
    id: 1,
    image: "https://themewagon.github.io/novena/images/team/1.jpg",
    name: "Thomas Henry",
    department: "Cardiology",
    subHeading: "Surgeon, Сardiologist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 2,
    image: "https://themewagon.github.io/novena/images/team/2.jpg",
    name: "Jonas Thomson",
    department: "Cardiology",
    subHeading: "Surgeon, Сardiologist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 3,
    image: "https://themewagon.github.io/novena/images/team/3.jpg",
    name: "Harrision Samuel",
    department: "Radiology",
    subHeading: "Internist, General Practitioner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 4,
    image: "https://themewagon.github.io/novena/images/team/4.jpg",
    name: "Thomas alexandar",
    department: "Radiology",
    subHeading: "Internist, General Practitioner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 5,
    image: "https://themewagon.github.io/novena/images/team/4.jpg",
    name: "Henry Samuel",
    department: "Pediatry",
    subHeading: "Internist, General Pediatry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 6,
    image: "https://themewagon.github.io/novena/images/team/3.jpg",
    name: "Alexandar James ",
    department: "Pediatry",
    subHeading: "Internist, General Pediatry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 7,
    image: "https://themewagon.github.io/novena/images/team/2.jpg",
    name: "Rishat Ahmed",
    department: "Neurology",
    subHeading: "Neurology Surgeon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 8,
    image: "https://themewagon.github.io/novena/images/team/1.jpg",
    name: "Harisson Thomas",
    department: "Orthopedic",
    subHeading: "Orthopedic Surgeon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 9,
    image: "https://themewagon.github.io/novena/images/team/1.jpg",
    name: "Henry samuel",
    department: "Palmology",
    subHeading: "Internist, General Practitioner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 10,
    image: "https://themewagon.github.io/novena/images/team/2.jpg",
    name: "Edward John",
    department: "Medicine",
    subHeading: "Internist, Emergency Physician",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 11,
    image: "https://themewagon.github.io/novena/images/team/3.jpg",
    name: "Harisson John",
    department: "Medicine",
    subHeading: "Internist, Emergency Physician",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
  {
    id: 12,
    image: "https://themewagon.github.io/novena/images/team/4.jpg",
    name: "Henry Thomas",
    department: "Traumatology",
    subHeading: "Internist, Emergency Physician",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tempore cumque voluptate beatae quis inventore sapiente nemo, a eligendi nostrum expedita veritatis neque incidunt ipsa doloribus provident ex, at ullam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, perferendis officiis esse quae, nobis eius explicabo quidem? Officia accusamus repudiandae ea esse non reiciendis accusantium voluptates, facilis enim, corrupti eligendi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo recusandae veritatis minus optio quod obcaecati laborum temporibus, deleniti vero perferendis molestias, ducimus facilis, sunt minima. Tempora, amet quasi asperiores voluptas?",
    education: EducationList,
    skills:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In architecto voluptatem alias, aspernatur voluptatibus corporis quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at consectetur natus eum ipsam dolorum iste laudantium tenetur.",
    expertise: ExpertiseList,
    weekday: "Monday - Friday",
    weekdayTime: "9:00 - 17:00",
    saturday: "Saturday",
    saturdayTime: "9:00 - 16:00",
    sundayday: "Sunday",
    sundayTime: "Closed",
    telephone: "+23-4565-65768",
  },
];

export { Doctors };
