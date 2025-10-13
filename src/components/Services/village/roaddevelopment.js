import React, { useState, useRef } from "react";

const roadProjects = [
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
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
        },
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
        id: 5,
        district: "Mathale",
        office: "NaUla",
        product: "Lihinipitiya Main Road",
        location: "Lihinipitiya",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.950248420939!2d79.9118635!3d6.854082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x5b1ceb43ccf38e81!2sPALIHAPITIYA!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",    
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
      {
        id: 6,
        district: "Mathale",
        office: "NaUla",
        product: "Lihinipitiya Main Canal Dam Sidewall ",
        location: "Lihinipitiya",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.950248420939!2d79.9118635!3d6.854082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x5b1ceb43ccf38e81!2sPALIHAPITIYA!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",    
        buyPath: "/buy/dambulla-pottery",
        description:
          "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
        },
        {
            id: 7,
            district: "Kegalle",
            office: "Aranayake",
            product: "Road development project from near Dothaloya Gate to the Fifty Acres section (Phase One)",
            location: "58G Ganthuna Medagama",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.314248420939!2d80.4048678!3d7.1182999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b8dcd181989%3A0x0000000000000000!2s58G%20Ganthuna%20Medagama!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.", 
        },
        {
            id: 8,
            district: "Kegalle",
            office: "Aranayake",
            product: "Rahala Maha Anum Restoration ",
            location: "Salava West",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.1108748!3d6.9338974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3ab17dada1561%3A0x6bb116010a9359ee!2sSalawa!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 9,
            district: "Rathnapura ",
            office: "Kolonna",
            product: "Bandarakanda-Tungdola road ",
            location: "Morawdiya",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6788787!3d6.3174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15625ecafa857%3A0xc9e3e2025a3cd346!2sMorawadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 10,
            district: "Rathnapura ",
            office: "Kolonna",
            product: "Kosgahahena road ",
            location: "Morawdiya",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.314248420939!2d80.6788787!3d6.3174668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15625ecafa857%3A0xc9e3e2025a3cd346!2sMorawadiya!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.", 
         },
         {
            id: 11,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Develop the road from near Mr. Kumara's house to Tiger Land by laying concrete ",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 12,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Develop the road from Ella to the Community Hall via Upper Polpitiya by concreting it",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 13,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Develop the side road from Ella Ihala Kajuvetiya by concreting it",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 14,
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
            id: 15,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Development of the road from the top of Dehigahahena to Mrs. Latha's garden using concrete",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 16,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Development of the road in front of Ella Upper Pre-School with concrete",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 17,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Medical clinic facilities",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 18,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Construction of a culvert near Mr. Gunawantha's house on the Ella Upper Gepalawatta Road",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 19,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Development of the Enasal Wattha road from near the coffee shop using concrete",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 20,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Development of box culverts near Mrs. Shirani's house on the Dola Ihala road",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 21,
            district: "Galle",
            office: "Yakkalamulla",
            product: "Development of the Ella Ihala Punchi Dehigaha Hena road using concrete",
            location: "182 C Ella Upper",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.1644184!3d6.2573409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae17f9d7bbcbe01%3A0xfff4da7ffddd03ff!2sElla%20(%E0%B6%87%E0%B6%BD%E0%B7%8A%E0%B6%BD)!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 22,
            district: "Matara",
            office: "Kirinda Phulwella",
            product: "Development of the Pitikumbura Road",
            location: "Walaknda South",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
          {
            id: 23,
            district: "Matara",
            office: "Kirinda Phulwella",
            product: "Development of the Pindeniya Road",
            location: "Walaknda South",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
            buyPath: "/buy/dambulla-pottery",
            description:
              "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
            },
            {
                id: 24,
                district: "Matara",
                office: "Kirinda Phulwella",
                product: "Development of Kaluhena Colony Welipotha Road",
                location: "Walaknda South",
                mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.6376655!3d6.0203737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1485d2381b083%3A0x3e906a380d1ba760!2sWalakanda%20South%2C%20Kirinda!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                buyPath: "/buy/dambulla-pottery",
                description:
                  "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
                },
                {
                    id: 35,
                    district: "Monaragala",
                    office: "Sewanagala",
                    product: "Development of the road from near the Punchiwewa bridge to Mr. Podibaba's land",
                    location: "Punchi wewa",
                    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8978778!3d6.3369366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9dfe40e5a07%3A0x484a0d98f6bd9f0b!2sSewanagala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                    buyPath: "/buy/dambulla-pottery",
                    description:
                      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  },
                  {
                    id: 26,
                    district: "Monaragala",
                    office: "Sewanagala",
                    product: "Concreting the agricultural road down from the land of Mr. W. Lakshman Rohana",
                    location: "Punchi wewa",
                    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.314248420939!2d80.8978778!3d6.3369366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae6a9dfe40e5a07%3A0x484a0d98f6bd9f0b!2sSewanagala!5e0!3m2!1sen!2slk!4v1695980000000!5m2!1sen!2slk",
                    buyPath: "/buy/dambulla-pottery",
                    description:
                      "This project supports traditional clay artisans in Dambulla, helping them preserve age-old techniques while improving product quality and market access. The initiative includes training, equipment upgrades, and connections to local and international buyers.",  
                    },
              
              
];

const RoadDevelopmentPage = () => {
  const [selectedProject, setSelectedProject] = useState(roadProjects[0]);
  const scrollTargetRef = useRef(null);

  const handleSelect = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      scrollTargetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 space-y-10">
      <h1 className="text-2xl font-bold text-[#2C3E50] mb-6">Road Development Projects</h1>

      {/* Table Section */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-[#F3931D] text-white">
            <tr>
              <th className="px-4 py-2 border">No</th>
              <th className="px-4 py-2 border">District</th>
              <th className="px-4 py-2 border">Divisional Secretary Office</th>
              <th className="px-4 py-2 border">Project Type</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Buy Product</th>
            </tr>
          </thead>
          <tbody>
            {roadProjects.map((item) => (
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
                    className="text-blue-600 underline hover:text-[#F3931D]"
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
      <div ref={scrollTargetRef} className="w-full flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:w-1/2 h-[400px] rounded-md overflow-hidden shadow-lg">
          <iframe
            title="Road Project Map"
            src={selectedProject.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2 h-[400px] bg-[#FFF7E6] p-6 rounded-md shadow-md overflow-y-auto">
          <h2 className="text-xl font-bold text-[#F3931D] mb-2">{selectedProject.name}</h2>
          <p className="text-sm text-gray-700 mb-4">{selectedProject.description}</p>
          <div className="text-sm space-y-1">
            <p><strong>District:</strong> {selectedProject.district}</p>
            <p><strong>Divisional Secretary Office:</strong> {selectedProject.office}</p>
            <p><strong>Project Type:</strong> {selectedProject.product}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadDevelopmentPage;
