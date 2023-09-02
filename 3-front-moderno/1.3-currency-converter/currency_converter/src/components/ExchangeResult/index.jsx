const ExchangeResult = ({ result, currency }) => {
    return (
        <>
            <h3>Valor en {currency}</h3>
            <h5>
                {result} {currency}
            </h5>
            {/* <h5>{amount * currencyMap[currency]} divisa</h5> */}
        </>
    );
};

export default ExchangeResult;
