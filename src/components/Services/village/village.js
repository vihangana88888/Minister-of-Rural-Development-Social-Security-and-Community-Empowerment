import React, { useState, useRef } from "react";

const villageServiceProjects = [
  {
    id: 1,
    district: "Mahanuwara",
    office: "Pathahewaheta",
    product: "Sarwodaya Road",
    location: "Bawlana",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.6512099!3d7.8724319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sDambulla!5e0!3m2!1sen!2slk!4v1690000000008!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
        "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",
  },
  {
    id: 2,
    district: "Mahanuwara",
    office: "Pathahewaheta",
    product: "Bawlana Bus stop to Delthota Road",
    location: "Bawlana",
    mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.6512099!3d7.8724319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sDambulla!5e0!3m2!1sen!2slk!4v1690000000008!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 3,
    district: "Mahanuwara",
    office: "Pathahewaheta",
    product: "Kalulella Road",
    location: "Bawlana",
    mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.7250899323!2d80.6512099!3d7.8724319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae522281e73e697%3A0xac30584dddae1156!2sDambulla!5e0!3m2!1sen!2slk!4v1690000000008!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 4,
    district: "Mathale",
    office: "Mathale",
    product: "Ankanda Diggala Bridge",
    location: "Ankanda",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.927755064948!2d80.6245928!3d7.584379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae351efbd5916b7%3A0x5fcebc86a621fe65!2sAnkanda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 4,
    district: "Mathale",
    office: "NaUla",
    product: "Lihinipitiya Main Road",
    location: "Lihinipitiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.950248420939!2d79.9118635!3d6.854082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x5b1ceb43ccf38e81!2sPALIHAPITIYA!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",    
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 5,
    district: "Mathale",
    office: "NaUla",
    product: "Lihinipitiya Main Canal Dam Sidewall ",
    location: "Lihinipitiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.950248420939!2d79.9118635!3d6.854082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x5b1ceb43ccf38e81!2sPALIHAPITIYA!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",    
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 6,
    district: "Mathale",
    office: "Mathale",
    product: "Entrepreneurship promotion",
    location: "Gongawela",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.434248420939!2d80.6222841!3d7.4659595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae344d5d6c4d617%3A0x39ca7c919bb03943!2sGongawela%2C%20Matale!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 6,
    district: "Mathale",
    office: "Ukuwela",
    product: "Providing food and drinks for tourists",
    location: "Alkaduwa Waththa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.624248420939!2d80.6728799!3d7.424052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35c768093f625%3A0x8a3c4742cd2c7161!2sElkaduwa%20Watta!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 7,
    district: "Madakalapuwa",
    office: "Koralaipattu South",
    product: "Drinking water facilities",
    location: "Murutthanai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sMurutthanai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 8,
    district: "Madakalapuwa",
    office: "Koralaipattu South",
    product: "Sanitary facilities",
    location: "Murutthanai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sMurutthanai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 9,
    district: "Madakalapuwa",
    office: "Koralaipattu South",
    product: "Health clinic facilities",
    location: "Murutthanai",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.314248420939!2d81.8046523!3d7.2234233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae513ddc602ccdb%3A0x0000000000000000!2sMurutthanai!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    showMore: "Click Here",
  },
  {
    id: 9,
    district: "Kegalle",
    office: "Aranayake",
    product: "Road development project from near Dothaloya Gate to the Fifty Acres section (Phase One)",
    location: "58G Ganthuna Medagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58G%20Ganthuna%20Medagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 10,
    district: "Kegalle",
    office: "Aranayake",
    product: "Sanitary facilities",
    location: "58G Ganthuna Medagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58G%20Ganthuna%20Medagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 11,
    district: "Kegalle",
    office: "Aranayake",
    product: "Rahala Maha Anum Restoration ",
    location: "Salava West",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.1108748!3d6.9338974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ab17dada1561%3A0x6bb116010a9359ee!2sSalawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 12,
    district: "Rathnapura ",
    office: "Kolonna",
    product: "Bandarakanda-Tungdola road ",
    location: "Morawdiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6788787!3d6.3174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15625ecafa857%3A0xc9e3e2025a3cd346!2sMorawadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 12,
    district: "Rathnapura ",
    office: "Kolonna",
    product: "Kosgahahena road ",
    location: "Morawdiya",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6788787!3d6.3174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15625ecafa857%3A0xc9e3e2025a3cd346!2sMorawadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 13,
    district: "Kurunegala",
    office: "Udubaddawa",
    product: "Agriculture and fisheries ",
    location: "Habarawewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.9353582!3d7.5204844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2d0410da177b7%3A0xac049a11afb96a83!2sHabarawewa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 14,
    district: "Puttalama",
    office: "Mahawewa",
    product: "Tourism and fishing industry ",
    location: "Lower Mahawewa, Upper Mahawewa, Upper Koswadi",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d79.8184106!3d7.4379365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c69b6435b237%3A0x9ae7fa5debad4b60!2sMeda%20Koswadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 15,
    district: "Hambantota",
    office: "AngunuKolapelass",
    product: "Tourism industry ",
    location: "AngunuKolapelass",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8962914!3d6.1663574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6adfd60786ea7%3A0x5bfedf1c6254ffc8!2sAgunukolapelessa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 16,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Develop the road from near Mr. Kumara's house to Tiger Land by laying concrete ",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 17,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Develop the road from Ella to the Community Hall via Upper Polpitiya by concreting it",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 17,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Develop the side road from Ella Ihala Kajuvetiya by concreting it",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 18,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Develop the two side roads on the Deniyamulla road by pouring concrete",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",
 },
  {
    id: 19,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Development of the road from the top of Dehigahahena to Mrs. Latha's garden using concrete",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 20,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Development of the road in front of Ella Upper Pre-School with concrete",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 21,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Medical clinic facilities",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 22,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Construction of a culvert near Mr. Gunawantha's house on the Ella Upper Gepalawatta Road",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 23,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Development of the Enasal Wattha road from near the coffee shop using concrete",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 24,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Development of box culverts near Mrs. Shirani's house on the Dola Ihala road",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 25,
    district: "Galle",
    office: "Yakkalamulla",
    product: "Development of the Ella Ihala Punchi Dehigaha Hena road using concrete",
    location: "182 C Ella Upper",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 26,
    district: "Matara",
    office: "Kirinda Phulwella",
    product: "Development of the Pitikumbura Road",
    location: "Walaknda South",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 27,
    district: "Matara",
    office: "Kirinda Phulwella",
    product: "Development of the Pindeniya Road",
    location: "Walaknda South",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 28,
    district: "Matara",
    office: "Kirinda Phulwella",
    product: "Development of Kaluhena Colony Welipotha Road",
    location: "Walaknda South",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  
  {
    id: 30,
    district: "Vavuniya",
    office: "Vavuniya South",
    product: "Providing food and beverages and providing public facilities",
    location: "Irattaperiyakulam",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4791437!3d8.7074043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sIrattaperiyakulam!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 31,
    district: "Vavuniya",
    office: "Vavuniya North",
    product: "Library renovation project",
    location: "Padhikudiruppu",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4392314!3d8.7074021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sPadhikudiruppu!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 32,
    district: "Vavuniya",
    office: "Vavuniya North",
    product: "Preschool renovation project",
    location: "Padhikudiruppu",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.4392314!3d8.7074021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x0000000000000000!2sPadhikudiruppu!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 32,
    district: "Kilinochchi",
    office: "Kandavalai",
    product: "Commercial agricultural products",
    location: "Pirimanthanaru",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.562787!3d9.3968607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afeb8930745a075%3A0xd099f1fe7114afaa!2sPiramanthanaru!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 33,
    district: "Gampaha",
    office: "Gampaha",
    product: "Hela Bojun Hall Improvement Project",
    location: "Upper Imbulgoda, Lower Imbulgoda, Ganemulla",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.0122859!3d7.0873144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fc0c2ac0fc07%3A0x35a2ab0e6244f39d!2sImbulgoda%2C%20Gampaha!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 34,
    district: "Monaragala",
    office: "Sewanagala",
    product: "Development of the road from near the Punchiwewa bridge to Mr. Podibaba's land",
    location: "Punchi wewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8978778!3d6.3369366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9dfe40e5a07%3A0x484a0d98f6bd9f0b!2sSewanagala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 35,
    district: "Monaragala",
    office: "Sewanagala",
    product: "Concreting the agricultural road down from the land of Mr. W. Lakshman Rohana",
    location: "Punchi wewa",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8978778!3d6.3369366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9dfe40e5a07%3A0x484a0d98f6bd9f0b!2sSewanagala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 36,
    district: "Badulla",
    office: "Ella",
    product: "Tourism",
    location: "68 C Maduragama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.314248420939!2d80.1996721!3d7.776529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcd1472fdf3bc3%3A0x8918fcce1525498e!2sMaduragama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 36,
    district: "Anuradhapura",
    office: "Kakirawa",
    product: "Tourism",
    location: "626 Mahawa, 627 Maradankadawala, Walapara",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.314248420939!2d80.5412385!3d8.1201991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc96e65e48bfbd%3A0xe43d407387d8f44e!2sMaradankadawala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 36,
    district: "Anurdhapura",
    office: "Ipalogama",
    product: "Tourism",
    location: "503 Ganthiriyagama",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.4158443!3d8.0713753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc94597cef8fcb%3A0x923b446274cd3b8b!2sIpalogama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
  {
    id: 37,
    district: "Polonnaruwa",
    office: "Elahara",
    product: "Fishing industry",
    location: "17 sarubima",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.314248420939!2d80.4158443!3d8.0713753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc94597cef8fcb%3A0x923b446274cd3b8b!2sIpalogama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
    buyPath: "/buy/dambulla-pottery",
    description:
      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },

  







];

const VillagePage = () => {
  const [selectedProject, setSelectedProject] = useState(villageServiceProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Village Service-Oriented Projects</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Product</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
          {villageServiceProjects.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-[#FFF7E6] cursor-pointer"
                onClick={() => handleSelect(item)}
              >
                <td className="px-4 py-2 border text-center">{item.id}</td>
                <td className="px-4 py-2 border">{item.district}</td>
                <td className="px-4 py-2 border">{item.office}</td>
                <td className="px-4 py-2 border">{item.product}</td>
                <td className="px-4 py-2 border text-blue-600 underline">{item.location}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={item.buyPath}
                    className="text-blue-600 underline hover:text-orange-600"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Click Here
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Split Layout Section */}
      <div
        ref={scrollTargetRef}
        className="w-full flex flex-col lg:flex-row gap-6 items-start"
      >
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Village Service Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Project Details Section */}
        <div className="w-full lg:w-1/2 h-[400px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#F3931D] mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
          <div className="text-sm space-y-1">
            <p><strong>District:</strong> {selectedProject.district}</p>
            <p><strong>Divisional Secretary Office:</strong> {selectedProject.office}</p>
            <p><strong>Product:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillagePage;