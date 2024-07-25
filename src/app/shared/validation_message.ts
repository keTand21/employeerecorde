export const ValidationMessages = {
    employe: {
        FirstName: [
            { type: 'required', message: 'First name is required' },
            { type: 'minlength', message: 'First name must be at least 2 characters long' },
            { type: 'maxlength', message: 'First name cannot be more than 10 characters long' },
        ],
        LastName: [
            { type: 'required', message: 'Last name is required' },
            { type: 'minlength', message: 'Last name must be at least 2 characters long' },
            { type: 'maxlength', message: 'Last name cannot be more than 10 characters long' },
        ],
        MobileNo: [
            { type: 'required', message: 'Mobile number is required' },
            { type: 'minlength', message: 'Mobile number must be 10 digit number' },
            { type: 'maxlength', message: 'Mobile number must be 10 digit number' },
        ],

        Address: [
            { type: 'required', message: 'Address is required' },
            { type: 'minlength', message: 'Address must be at least 5 characters long' },
            { type: 'maxlength', message: 'Address cannot be more than 35 characters long' },
        ],

        EmailId: [
            { type: 'required', message: 'Email id is required' },
            { type: 'email', message: 'Email id is must be valid' },
        ],

        Position: [
            { type: 'required', message: 'Position is required' },
        ],

        DateOfJoining: [
            { type: 'required', message: 'Date Of Joining is required' },
        ],

    }
}