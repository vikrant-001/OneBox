import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './auth/theme';
import ContextProvider from './auth/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
        <ChakraProvider theme={theme}>
            <ContextProvider>
                <App />
            </ContextProvider>
        </ChakraProvider>
    
);


