export const GLASSES_STEPS = ['Customer', 'Exams', 'Frames', 'Lenses', 'Add-Ons', 'Review'];
export const CONTACTS_STEPS = ['Customer', 'Exams', 'Configuration', 'Review'];

export const EXAM_CONFIG = [
  { id: "eye-exam", title: "Eye Exam", type: "select", options: ["None", "Comprehensive", "Intermediate"] },
  { id: "contacts-exam", title: "Contacts Exam", type: "select", options: ["None", "Fit Level 1", "Fit Level 2"] },
  { id: "refraction", title: "Refraction", type: "checkbox" },
  { id: "retinal", title: "Retinal Fundus Photos", type: "checkbox" },
] as const;

export const LENS_CONFIG = [
  { id: "rx", title: "Rx", type: "select", options: ["None", "Single Vision", "Progressive", "Bifocal"] },
  { id: "lens-design", title: "Lens Design", type: "select", options: ["None", "Standard", "Digital"] },
  { id: "material", title: "Material", type: "select", options: ["None", "Polycarbonate", "Hi-Index", "CR-39"] },
  { id: "coatings", title: "Coatings", type: "select", options: ["None", "Anti-Reflective", "Scratch Resistant"] },
] as const;

export const ADDON_OPTIONS = ["No Extras", "Anti-Fatigue", "Tech Shield", "Warranty Extension", "Accessories"];