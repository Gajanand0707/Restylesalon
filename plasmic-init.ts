import { initPlasmicLoader } from "@plasmicapp/loader-nextjs/react-server-conditional";
import Button from "./components/ui/Button";
import FAQ from "./components/ui/Faq";
import FacialSlider from "./components/ui/SliderFacial";
import SubscribeForm from "./components/SubscribeForm";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "nvGLM7ir5JpDeTos3dW8do",
      token: "dMcVXV1BK8jb4Ol39qMRIYVdY63y9bRY8ReD4LVClUYWWU0qTDJAJwQEFgJTN1wUaxDcSNypH6DQMiKCMWw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: process.env.NODE_ENV !== 'production',
});

PLASMIC.registerComponent(Button, {
  name: "Button",
  props: {
    label: {
      type: "string",
      defaultValue: "Click Me",
    },

    href: {
      type: "string",
      description: "Optional link (tel:, mailto:, https://)",
    },

    bgColor: {
      type: "color",
      defaultValue: "#8B1E2D",
    },

    textColor: {
      type: "color",
      defaultValue: "#ffffff",
    },

    borderColor: {
      type: "color",
      defaultValue: "transparent",
    },

    borderWidth: {
      type: "number",
      defaultValue: 1,
    },

    radius: {
      type: "number",
      defaultValue: 999,
    },

    padding: {
      type: "string",
      defaultValue: "14px 26px",
    },

    fontSize: {
      type: "string",
      defaultValue: "14px",
    },

    fontWeight: {
      type: "number",
      defaultValue: 500,
    },

   
  },
});
PLASMIC.registerComponent(SubscribeForm, {
  name: "SubscribeForm",
  props: {
    // Labels
    labelColor: { type: "color", defaultValue: "#ffffff" },
    labelFontSize: { type: "number", defaultValue: 14 },
    labelMarginBottom: { type: "number", defaultValue: 8 },

    // Inputs
    inputHeight: { type: "number", defaultValue: 52 },
    inputRadius: { type: "number", defaultValue: 999 },
    inputBgColor: { type: "color", defaultValue: "#ffffff" },
    inputTextColor: { type: "color", defaultValue: "#000000" },
    inputFontSize: { type: "number", defaultValue: 16 },
    inputPaddingX: { type: "number", defaultValue: 20 },

    // Button
    buttonText: { type: "string", defaultValue: "Subscribe Now" },
    buttonHeight: { type: "number", defaultValue: 54 },
    buttonRadius: { type: "number", defaultValue: 999 },
    buttonBgColor: { type: "color", defaultValue: "#8f1d2c" },
    buttonTextColor: { type: "color", defaultValue: "#ffffff" },
    buttonFontSize: { type: "number", defaultValue: 16 },
    buttonPaddingX: { type: "number", defaultValue: 36 },

    // Events
    onSubmit: {
      type: "eventHandler",
      argTypes: [],
    },
  },
});
PLASMIC.registerComponent(FacialSlider, {
  name: "FacialSlider",
  props: {
    cards: {
      type: "array",
      description: "Facial cards",
      itemType: {
        type: "object",
        fields: {
          imageSrc: {
            type: "imageUrl",
            description: "Card image",
          },
          title: {
            type: "string",
            defaultValue: "Glow Facial",
          },
          subtitle: {
            type: "string",
            defaultValue: "Facials",
          },
        },
      },
      defaultValue: [
        {
          imageSrc: "https://via.placeholder.com/400",
          title: "Hydra Facial",
          subtitle: "Facials",
        },
        {
          imageSrc: "https://via.placeholder.com/400",
          title: "Anti-Aging Facial",
          subtitle: "Skin Care",
        },
      ],
    },

    onBookNow: {
      type: "eventHandler",
      argTypes: [],
    },
  },
});

PLASMIC.registerComponent(FAQ, {
  name: "FAQ",
  description: "FAQ accordion with full style controls",
  props: {
    faqs: {
      type: "array",
      itemType: {
        type: "object",
        fields: {
          question: { type: "string" },
          answer: { type: "string" },
        },
      },
    },

    defaultOpenIndex: {
      type: "number",
      defaultValue: 0,
    },

    backgroundColor: {
      type: "color",
      defaultValue: "#ffffff",
    },

    activeBackgroundColor: {
      type: "color",
      defaultValue: "#fff6f6",
    },

    borderColor: {
      type: "color",
      defaultValue: "#e5e5e5",
    },

    activeBorderColor: {
      type: "color",
      defaultValue: "#c62828",
    },

    questionColor: {
      type: "color",
      defaultValue: "#1a1a1a",
    },

    answerColor: {
      type: "color",
      defaultValue: "#666666",
    },

    questionFontSize: {
      type: "number",
      defaultValue: 16,
    },

    answerFontSize: {
      type: "number",
      defaultValue: 14,
    },

    borderRadius: {
      type: "number",
      defaultValue: 14,
    },
  },
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
