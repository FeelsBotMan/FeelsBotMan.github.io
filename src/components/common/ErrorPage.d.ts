interface ErrorPageProps {
    title: string;
    message: string;
    buttonText?: string;
    onButtonClick?: () => void;
}
declare const ErrorPage: React.FC<ErrorPageProps>;
export default ErrorPage;
