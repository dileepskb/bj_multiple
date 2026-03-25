import { create } from "zustand"

type State = {
  sections: any[]
  addSection: () => void
  addContainer: (sectionId: string) => void
  addComponent: (
    sectionId: string,
    containerId: string,
    type: string,
  ) => void
  updateComponent: (id: string, newProps: any) => void
}

export const useBuilderStore = create<State>((set) => ({
  sections: [],

  addSection: () =>
    set((state) => ({
      sections: [
        ...state.sections,
        { id: Date.now().toString(), containers: [] },
      ],
    })),

  addContainer: (sectionId: string) =>
    set((state) => ({
      sections: state.sections.map((sec) =>
        sec.id === sectionId
          ? {
              ...sec,
              containers: [
                ...sec.containers,
                {
                  id: Date.now().toString(),
                  components: [],
                },
              ],
            }
          : sec
      ),
    })),

  addComponent: (sectionId: string, containerId: string, type: string) =>
    set((state) => ({
      sections: state.sections.map((sec) =>
        sec.id === sectionId
          ? {
              ...sec,
              containers: sec.containers.map((con) =>
                con.id === containerId
                  ? {
                      ...con,
                      components: [
                        ...con.components,
                        {
                          id: Date.now().toString(),
                          type,
                          props: getDefaultProps(type), // ✅ FIXED
                        },
                      ],
                    }
                  : con
              ),
            }
          : sec
      ),
    })),

  updateComponent: (id: string, newProps: any) =>
    set((state) => ({
      sections: state.sections.map((sec) => ({
        ...sec,
        containers: sec.containers.map((con) => ({
          ...con,
          components: con.components.map((comp) =>
            comp.id === id
              ? {
                  ...comp,
                  props: {
                    ...comp.props,
                    ...newProps,
                  },
                }
              : comp
          ),
        })),
      })),
    })),
}))

// 🔥 DEFAULT PROPS (IMPORTANT)
const getDefaultProps = (type: string) => {
  if (type === "gallery") {
    return {
      category: "",
    }
  }

  if (type === "image") {
    return {
      src: "", // 🔥 image preview ke liye
    }
  }

  return {}
}