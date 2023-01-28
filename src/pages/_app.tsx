import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { ModalProvider } from '@/src/contexts/ModalContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ModalProvider>
			<Component {...pageProps} />
		</ModalProvider>
	);
}

export default MyApp;
