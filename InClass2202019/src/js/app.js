class AppComponent extends React.Component {

    //constructor
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container">
                <ZipCodeInput specialcode="okay" />
                <EmailInput />
            </div>
        );
    };
}