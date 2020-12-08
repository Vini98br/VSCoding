import { FluidObject } from 'gatsby-image';
import React, {createContext, useContext, useState} from 'react';

export interface ContextValues {
  modalImage: FluidObject;
  setModalImage(state: any): void;
}

const Context = createContext<ContextValues>(null!);

const GlobalState: React.FC = ({ children }) => {
  const [modalImage, setModalImage] = useState<FluidObject | null>(null);
  
  const values = {
    modalImage,
    setModalImage
  } as ContextValues;

  return (
    <Context.Provider value={values}>
      {children}
    </Context.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext<ContextValues>(Context)
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a Context');
  }
  return context;
}

export default GlobalState;