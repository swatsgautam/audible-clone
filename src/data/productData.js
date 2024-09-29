const categories = [
    {
      category: "Editor's picks",
      books: [
        {
          id: '1',
          src: require('../assets/images/holistic_beauty.jpg'),
          title: "The book of Holistic Beauty",
          author: "Vasudha Rai",
          subText: 'A 360 degree approach to skincare',
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'Beauty journalist Vasudha Rai distills her 20+ years’ experience of writing and researching beauty, in this seminal book that looks beyond the basics. From designing an age-appropriate beauty routine, to actives, injectables, dermafacials and DIYs, plus the effect of meditation, nutraceuticals and gut health on the skin, this Audible Original will address it all.'
        },
        {
          id: '2',
          src: require('../assets/images/secret_of_good_health.jpg'),
          title: "Secrets of Good Health",
          author: "Rujuta Diwekar",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'India’s leading nutritionist, Rujuta Diwekar is back with Season 2! Rujuta continues where she left and busts all food myths, decodes diet trends and sets you on a path of sustainable health and weight loss. With easy to follow guidelines, do-at-home tips and a healthy dose of grand mom’s wisdom and wit, she makes losing weight and staying healthy a fun, relaxed and exciting journey. Come along. If you haven’t heard Season 1 yet, revisit the wisdom and fun tips-tricks and get on the Season 2 journey!'
        },
        {
          id: '3',
          src: require('../assets/images/cargo.jpg'),
          title: "Cargo: The End Is Just the Beginning",
          author: "Arati Kadav",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description:'From the mind of Arati Kadav, enter the world of Cargo, an Audible Original workplace comedy where the end of your life is just another workday for them. In a world where ancient Rakshasha prepare humans for reincarnation in spaceships, the life of Prahastha, a rigid transition officer who has lived alone in Space for decades is disrupted by the sudden arrival of Yuvishka, an idealistic and energetic new assistant.'
        },
        {
          id: '4',
          src: require('../assets/images/malabar.jpg'),
          title: "The Malabar Rebellion",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'The Malabar Rebellion, an Audible original produced by Asiaville, recaptures the dizzying six months from August 1921 when the Muslim peasants of the southern districts of the then Madras Presidency (now northern Kerala) rose up against their oppressive British colonial rulers and feudal landlords. The rollercoaster saga of their daunting struggle, sacrifice and martyrdom continues to fire the popular imagination and kindle keen debate. Scripted by K.P. Sethunath, narrated and directed by Sashi Kumar, the podcast rolls to the beat of the inspiring verse on the uprising penned by Kerala’s dear poet-lyricist, P. Bhaskaran.'
        },
        {
          id: '5',
          src: require('../assets/images/rise_fall_of_don.jpg'),
          title: "Rise and Fall of the Dons, Season 1",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: "In this saga, we follow Kabir's tumultuous journey from a grief-stricken boy in 1980s Azamgarh to a ruthless crime lord entangled in a web of love, betrayal, and power. As he navigates loss, loyalty, and the haunting echoes of his past, Kabir's rise to infamy unfolds against the backdrop of a small town tainted by secrets. Will his pursuit of success lead to redemption or ultimate downfall?"
        },
        {
          id: '6',
          src: require('../assets/images/rise_and_fall_of_don_1.jpg'),
          title: "Rise and Fall of the Dons, Season 2",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: "The story unfurls in Murshidabad, where a gruesome discovery initiates Devesh's surrender, confessing to the unthinkable act. As his life unfolds through episodes of alliances, wedding assaults, and a labyrinth of challenges, Devesh's journey takes unexpected turns—from incarceration to daring escapes, flourishing illegal businesses to losses. Will Devesh's pursuit of revenge lead to redemption, or is his tragic sacrifice in Cambodia the ultimate price for protecting his family from unseen political threats?"
        }
      ]
    },
    {
      category: "Popular Audible Originals",
      books: [
        {
          id: '1',
          src: require('../assets/images/holistic_beauty.jpg'),
          title: "The book of Holistic Beauty",
          author: "Vasudha Rai",
          subText: 'A 360 degree approach to skincare',
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'Beauty journalist Vasudha Rai distills her 20+ years’ experience of writing and researching beauty, in this seminal book that looks beyond the basics. From designing an age-appropriate beauty routine, to actives, injectables, dermafacials and DIYs, plus the effect of meditation, nutraceuticals and gut health on the skin, this Audible Original will address it all.'
        },
        {
          id: '2',
          src: require('../assets/images/secret_of_good_health.jpg'),
          title: "Secrets of Good Health",
          author: "Rujuta Diwekar",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'India’s leading nutritionist, Rujuta Diwekar is back with Season 2! Rujuta continues where she left and busts all food myths, decodes diet trends and sets you on a path of sustainable health and weight loss. With easy to follow guidelines, do-at-home tips and a healthy dose of grand mom’s wisdom and wit, she makes losing weight and staying healthy a fun, relaxed and exciting journey. Come along. If you haven’t heard Season 1 yet, revisit the wisdom and fun tips-tricks and get on the Season 2 journey!'
        },
        {
          id: '3',
          src: require('../assets/images/cargo.jpg'),
          title: "Cargo: The End Is Just the Beginning",
          author: "Arati Kadav",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description:'From the mind of Arati Kadav, enter the world of Cargo, an Audible Original workplace comedy where the end of your life is just another workday for them. In a world where ancient Rakshasha prepare humans for reincarnation in spaceships, the life of Prahastha, a rigid transition officer who has lived alone in Space for decades is disrupted by the sudden arrival of Yuvishka, an idealistic and energetic new assistant.'
        },
        {
          id: '4',
          src: require('../assets/images/malabar.jpg'),
          title: "The Malabar Rebellion",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'The Malabar Rebellion, an Audible original produced by Asiaville, recaptures the dizzying six months from August 1921 when the Muslim peasants of the southern districts of the then Madras Presidency (now northern Kerala) rose up against their oppressive British colonial rulers and feudal landlords. The rollercoaster saga of their daunting struggle, sacrifice and martyrdom continues to fire the popular imagination and kindle keen debate. Scripted by K.P. Sethunath, narrated and directed by Sashi Kumar, the podcast rolls to the beat of the inspiring verse on the uprising penned by Kerala’s dear poet-lyricist, P. Bhaskaran.'
        },
        {
          id: '5',
          src: require('../assets/images/rise_fall_of_don.jpg'),
          title: "Rise and Fall of the Dons, Season 1",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: "In this saga, we follow Kabir's tumultuous journey from a grief-stricken boy in 1980s Azamgarh to a ruthless crime lord entangled in a web of love, betrayal, and power. As he navigates loss, loyalty, and the haunting echoes of his past, Kabir's rise to infamy unfolds against the backdrop of a small town tainted by secrets. Will his pursuit of success lead to redemption or ultimate downfall?"
        },
        {
          id: '6',
          src: require('../assets/images/rise_and_fall_of_don_1.jpg'),
          title: "Rise and Fall of the Dons, Season 2",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: "The story unfurls in Murshidabad, where a gruesome discovery initiates Devesh's surrender, confessing to the unthinkable act. As his life unfolds through episodes of alliances, wedding assaults, and a labyrinth of challenges, Devesh's journey takes unexpected turns—from incarceration to daring escapes, flourishing illegal businesses to losses. Will Devesh's pursuit of revenge lead to redemption, or is his tragic sacrifice in Cambodia the ultimate price for protecting his family from unseen political threats?"
        }
      ]
    },
    {
      category: "Most Popular Podcasts",
      books: [
        {
          id: '1',
          src: require('../assets/images/holistic_beauty.jpg'),
          title: "The book of Holistic Beauty",
          author: "Vasudha Rai",
          subText: 'A 360 degree approach to skincare',
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'Beauty journalist Vasudha Rai distills her 20+ years’ experience of writing and researching beauty, in this seminal book that looks beyond the basics. From designing an age-appropriate beauty routine, to actives, injectables, dermafacials and DIYs, plus the effect of meditation, nutraceuticals and gut health on the skin, this Audible Original will address it all.'
        },
        {
          id: '2',
          src: require('../assets/images/secret_of_good_health.jpg'),
          title: "Secrets of Good Health",
          author: "Rujuta Diwekar",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'India’s leading nutritionist, Rujuta Diwekar is back with Season 2! Rujuta continues where she left and busts all food myths, decodes diet trends and sets you on a path of sustainable health and weight loss. With easy to follow guidelines, do-at-home tips and a healthy dose of grand mom’s wisdom and wit, she makes losing weight and staying healthy a fun, relaxed and exciting journey. Come along. If you haven’t heard Season 1 yet, revisit the wisdom and fun tips-tricks and get on the Season 2 journey!'
        },
        {
          id: '3',
          src: require('../assets/images/cargo.jpg'),
          title: "Cargo: The End Is Just the Beginning",
          author: "Arati Kadav",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description:'From the mind of Arati Kadav, enter the world of Cargo, an Audible Original workplace comedy where the end of your life is just another workday for them. In a world where ancient Rakshasha prepare humans for reincarnation in spaceships, the life of Prahastha, a rigid transition officer who has lived alone in Space for decades is disrupted by the sudden arrival of Yuvishka, an idealistic and energetic new assistant.'
        },
        {
          id: '4',
          src: require('../assets/images/malabar.jpg'),
          title: "The Malabar Rebellion",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: 'The Malabar Rebellion, an Audible original produced by Asiaville, recaptures the dizzying six months from August 1921 when the Muslim peasants of the southern districts of the then Madras Presidency (now northern Kerala) rose up against their oppressive British colonial rulers and feudal landlords. The rollercoaster saga of their daunting struggle, sacrifice and martyrdom continues to fire the popular imagination and kindle keen debate. Scripted by K.P. Sethunath, narrated and directed by Sashi Kumar, the podcast rolls to the beat of the inspiring verse on the uprising penned by Kerala’s dear poet-lyricist, P. Bhaskaran.'
        },
        {
          id: '5',
          src: require('../assets/images/rise_fall_of_don.jpg'),
          title: "Rise and Fall of the Dons, Season 1",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: "In this saga, we follow Kabir's tumultuous journey from a grief-stricken boy in 1980s Azamgarh to a ruthless crime lord entangled in a web of love, betrayal, and power. As he navigates loss, loyalty, and the haunting echoes of his past, Kabir's rise to infamy unfolds against the backdrop of a small town tainted by secrets. Will his pursuit of success lead to redemption or ultimate downfall?"
        },
        {
          id: '6',
          src: require('../assets/images/rise_and_fall_of_don_1.jpg'),
          title: "Rise and Fall of the Dons, Season 2",
          author: "Asiaville",
          narratedBy: "Vasudha Rai",
          recordType: 'Original Recording',
          description: "The story unfurls in Murshidabad, where a gruesome discovery initiates Devesh's surrender, confessing to the unthinkable act. As his life unfolds through episodes of alliances, wedding assaults, and a labyrinth of challenges, Devesh's journey takes unexpected turns—from incarceration to daring escapes, flourishing illegal businesses to losses. Will Devesh's pursuit of revenge lead to redemption, or is his tragic sacrifice in Cambodia the ultimate price for protecting his family from unseen political threats?"
        }
      ]
    }
  ];
  
  export default categories;
  