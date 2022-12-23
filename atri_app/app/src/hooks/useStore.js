import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Footer": {
      "callbacks": {}
    },
    "Flex158": {
      "callbacks": {}
    },
    "Flex159": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex161": {
      "callbacks": {}
    },
    "Flex163": {
      "callbacks": {}
    },
    "Flex162": {
      "callbacks": {}
    },
    "Flex167": {
      "callbacks": {}
    },
    "Flex165": {
      "callbacks": {}
    },
    "Flex166": {
      "callbacks": {}
    },
    "Flex164": {
      "callbacks": {}
    },
    "Flex171": {
      "callbacks": {}
    },
    "Flex169": {
      "callbacks": {}
    },
    "Flex170": {
      "callbacks": {}
    },
    "Flex168": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Flex181": {
      "callbacks": {}
    },
    "Flex182": {
      "callbacks": {}
    },
    "Flex180": {
      "callbacks": {}
    },
    "Flex184": {
      "callbacks": {}
    },
    "Flex185": {
      "callbacks": {}
    },
    "Flex186": {
      "callbacks": {}
    },
    "Flex191": {
      "callbacks": {}
    },
    "Flex187": {
      "callbacks": {}
    },
    "Flex188": {
      "callbacks": {}
    },
    "Flex189": {
      "callbacks": {}
    },
    "Flex190": {
      "callbacks": {}
    },
    "Flex192": {
      "callbacks": {}
    },
    "Navbar": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex194": {
      "callbacks": {}
    },
    "Flex195": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Intro": {
      "callbacks": {}
    },
    "Flex196": {
      "callbacks": {}
    },
    "Flex197": {
      "callbacks": {}
    },
    "Flex353": {
      "callbacks": {}
    },
    "Flex354": {
      "callbacks": {}
    },
    "Flex356": {
      "callbacks": {}
    },
    "Flex198": {
      "callbacks": {}
    },
    "TrustTestimonals": {
      "callbacks": {}
    },
    "Flex199": {
      "callbacks": {}
    },
    "Flex202": {
      "callbacks": {}
    },
    "Flex203": {
      "callbacks": {}
    },
    "Services": {
      "callbacks": {}
    },
    "Flex216": {
      "callbacks": {}
    },
    "Flex217": {
      "callbacks": {}
    },
    "Flex218": {
      "callbacks": {}
    },
    "Flex239": {
      "callbacks": {}
    },
    "Flex236": {
      "callbacks": {}
    },
    "Flex233": {
      "callbacks": {}
    },
    "Div57": {
      "callbacks": {}
    },
    "Div58": {
      "callbacks": {}
    },
    "Div59": {
      "callbacks": {}
    },
    "Flex237": {
      "callbacks": {}
    },
    "Div19": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "Div60": {
      "callbacks": {}
    },
    "Div61": {
      "callbacks": {}
    },
    "Flex238": {
      "callbacks": {}
    },
    "Div65": {
      "callbacks": {}
    },
    "Div63": {
      "callbacks": {}
    },
    "Div64": {
      "callbacks": {}
    },
    "Flex358": {
      "callbacks": {}
    },
    "Projects": {
      "callbacks": {}
    },
    "Flex240": {
      "callbacks": {}
    },
    "Flex241": {
      "callbacks": {}
    },
    "Flex242": {
      "callbacks": {}
    },
    "Blogs": {
      "callbacks": {}
    },
    "Flex243": {
      "callbacks": {}
    },
    "Flex244": {
      "callbacks": {}
    },
    "Flex245": {
      "callbacks": {}
    },
    "Flex249": {
      "callbacks": {}
    },
    "Flex250": {
      "callbacks": {}
    },
    "Flex251": {
      "callbacks": {}
    },
    "Flex252": {
      "callbacks": {}
    },
    "Achievement": {
      "callbacks": {}
    },
    "Flex359": {
      "callbacks": {}
    },
    "Flex360": {
      "callbacks": {}
    },
    "Flex361": {
      "callbacks": {}
    },
    "Gallery": {
      "callbacks": {}
    },
    "Flex253": {
      "callbacks": {}
    },
    "Flex254": {
      "callbacks": {}
    },
    "Flex255": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Flex257": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Work_Experience": {
      "callbacks": {}
    },
    "Flex260": {
      "callbacks": {}
    },
    "Flex264": {
      "callbacks": {}
    },
    "Flex262": {
      "callbacks": {}
    },
    "Flex263": {
      "callbacks": {}
    },
    "Flex284": {
      "callbacks": {}
    },
    "Flex282": {
      "callbacks": {}
    },
    "Flex279": {
      "callbacks": {}
    },
    "Flex274": {
      "callbacks": {}
    },
    "Flex272": {
      "callbacks": {}
    },
    "Flex268": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Flex273": {
      "callbacks": {}
    },
    "Flex270": {
      "callbacks": {}
    },
    "Flex271": {
      "callbacks": {}
    },
    "Flex283": {
      "callbacks": {}
    },
    "Flex280": {
      "callbacks": {}
    },
    "Flex275": {
      "callbacks": {}
    },
    "Flex276": {
      "callbacks": {}
    },
    "Flex281": {
      "callbacks": {}
    },
    "Flex277": {
      "callbacks": {}
    },
    "Flex278": {
      "callbacks": {}
    },
    "Flex301": {
      "callbacks": {}
    },
    "Flex299": {
      "callbacks": {}
    },
    "Flex296": {
      "callbacks": {}
    },
    "Flex291": {
      "callbacks": {}
    },
    "Flex289": {
      "callbacks": {}
    },
    "Flex285": {
      "callbacks": {}
    },
    "Flex286": {
      "callbacks": {}
    },
    "Flex290": {
      "callbacks": {}
    },
    "Flex287": {
      "callbacks": {}
    },
    "Flex288": {
      "callbacks": {}
    },
    "Flex300": {
      "callbacks": {}
    },
    "Flex297": {
      "callbacks": {}
    },
    "Flex292": {
      "callbacks": {}
    },
    "Flex293": {
      "callbacks": {}
    },
    "Flex298": {
      "callbacks": {}
    },
    "Flex294": {
      "callbacks": {}
    },
    "Flex295": {
      "callbacks": {}
    },
    "Flex318": {
      "callbacks": {}
    },
    "Flex316": {
      "callbacks": {}
    },
    "Flex313": {
      "callbacks": {}
    },
    "Flex308": {
      "callbacks": {}
    },
    "Flex306": {
      "callbacks": {}
    },
    "Flex302": {
      "callbacks": {}
    },
    "Flex303": {
      "callbacks": {}
    },
    "Flex307": {
      "callbacks": {}
    },
    "Flex304": {
      "callbacks": {}
    },
    "Flex305": {
      "callbacks": {}
    },
    "Flex317": {
      "callbacks": {}
    },
    "Flex314": {
      "callbacks": {}
    },
    "Flex309": {
      "callbacks": {}
    },
    "Flex310": {
      "callbacks": {}
    },
    "Flex315": {
      "callbacks": {}
    },
    "Flex311": {
      "callbacks": {}
    },
    "Flex312": {
      "callbacks": {}
    },
    "TextBox119": {
      "custom": {
        "text": "F A Q"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image43": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image45": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image46": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image47": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image48": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "How do you charge for projects ?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435e05bd67f4a4c972_arrow-down-s-line%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/6078d43538e88cf2a8ff4464_White%20Logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "hi@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/60792c7df85964dafaa3825d_Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox196": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox197": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox198": {
      "custom": {
        "text": "Dribble"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox199": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox200": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "custom": {
        "text": "Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox202": {
      "custom": {
        "text": "Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox203": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox204": {
      "custom": {
        "text": "Twitter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "© All rights reserved. Conversionflow. Powered by Webflow / Image License Info / Instructions / Changelog / Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox15": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "that delight and inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button7": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/icons8-right-arrow-50.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-800.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/6078b0c238e88c2e55fe84cf_Group%20335.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/6078b0cd748b8581836fddf5_Group%20334.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/6078b0ccdbeafadf1a24d34a_Group%20333.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/6078b0c235209438ffca029b_Group%20336.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox30": {
      "custom": {
        "text": "S E R V I C E S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843b6409375f7c23f2b_Group%2017.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": " Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "custom": {
        "text": "Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef58435ceaed068dde60ca_Group%2016.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox36": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "custom": {
        "text": "Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox156": {
      "custom": {
        "text": "Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef584362e74acfa6b75398_Group%2051.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox37": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": " Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox159": {
      "custom": {
        "text": "Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "custom": {
        "text": " Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "PROJECTS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "I bring results.  My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "custom": {
        "text": "B L O G S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox207": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "How to build rapport with your web design clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox75": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox209": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "April 16, 2021 2 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "Design tips for designers, that cover everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox208": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "April 11, 2021 20 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "April 10, 2021 "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox211": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "PRODUCT DESIGNER"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/60751db05a9a1b47d320c2a0_image_processing20200129-19798-1k8ponz%207-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/60751db04d121379342550c6_image_processing20200129-19798-1k8ponz%2011-min-p-500.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image57": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/icons8-breifcase-96.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox162": {
      "custom": {
        "text": "  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image58": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/icons8-books-emoji-96.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "custom": {
        "text": "Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image61": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox167": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image62": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox170": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "custom": {
        "text": "October 19 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox174": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox175": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image64": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox176": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox177": {
      "custom": {
        "text": "October 19 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox178": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image65": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox179": {
      "custom": {
        "text": "MSc (Human Computer Interaction)"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox180": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox181": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "custom": {
        "alt": "No preview available",
        "src": "C:/Program Files/Git/Atri/app-assets/5fef5843523345463e5a1851_arrow-right-up-line%206%20(1).png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox182": {
      "custom": {
        "text": "Senior Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox183": {
      "custom": {
        "text": "October 19 - Current"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
