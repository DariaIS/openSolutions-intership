export type IActionModal = { 
  componentName: string,
  componentId: number,
  closeModalHandler: () => {
    payload: undefined,
    type: string
  }
};