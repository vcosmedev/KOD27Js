const CardWrapper = (props) => {
    const { content } = props;
    const { children } = props;
    return (
        <div
            style={{
                border: '1px solid red',
                padding: '1rem',
                borderRadius: '.5rem',
            }}
        >
            {content}
            {children}
        </div>
    );
};

export default CardWrapper;
