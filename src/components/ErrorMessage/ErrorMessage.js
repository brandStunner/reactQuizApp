const ErrorMessage = ({children}) => {
    return (
        <div style =
        {{
            width: "100%",
            padding: 10,
            marginTop: 10,
            backgroundColor: 'red',
            textAlign: 'center',
            borderRadius: 4,
            color: 'white',
            textTransform: 'capitalize'
            // https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple
        }}>
            
            {children}
        </div>
    )
}
export default  ErrorMessage