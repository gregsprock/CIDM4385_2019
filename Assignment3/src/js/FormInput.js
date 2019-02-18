
const FormInput = (props) => {
    return React.createElement('div', {className: "bg-primary rounded p-4", style: {width: 400, height: 300, margin: "auto", marginTop: 50}},        
        React.createElement('div', {className: "form-group"},
            React.createElement('label', {for: "exampleInputEmail1"}, "Email address"),
            React.createElement('input', {className: "form-control", 
                                                type: "email", 
                                                id: "exampleInputEmail1", 
                                                placeholder: "Enter email"},)
        ),

        React.createElement('div', {className: "form-group"},                
            React.createElement('label', {for: "exampleInputZipCode"}, "Zip Code"),                
            React.createElement('input', {className: "form-control", 
                                            type: "Zip Code", 
                                            id: "exampleInputZipCode", 
                                            placeholder: "Enter Zip Code"},)
        ),
        React.createElement('div', {className: "btn btn-primary"},                
            React.createElement('button', {type: "submit", style: {float: "right"}}, "Submit")
        )
    );
};