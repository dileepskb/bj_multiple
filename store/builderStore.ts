import { create } from "zustand"

type State = {
  sections: any[]
  addSection: () => void
  addContainer: (sectionId: string) => void // ✅ add this
  addComponent: (
  sectionId: string,
  containerId: string,
  type: string
) => void
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
                { id: Date.now().toString(), components: [] },
              ],
            }
          : sec
      ),
    })),
    addComponent: (
        sectionId: string,
        containerId: string,
        type: string
        ) =>
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
                            },
                            ],
                        }
                        : con
                    ),
                }
                : sec
            ),
        })),
}))