// kantor walut na dzien 5.11.2020

const Cash = (props) => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
  };

  currencies = [
    {
      id: 1,
      name: "dollar",
      ratio: 3.81,
      title: "Wartosc w dollarach:",
    },
    {
      id: 2,
      name: "euro",
      ratio: 4.52,
      title: "Wartosc w euro:",
    },
    {
      id: 3,
      name: "dollar",
      ratio: 0.58,
      title: "Wartosc w chinskich Yuan:",
    },
    {
      id: 4,
      name: "pound",
      ratio: 5.0,
      title: "Wartosc w funtach:",
    },
  ];

  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  render() {
    const { amount } = this.state;
    // destrukturyzacja

    const calculators = this.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
      />
    ));

    return (
      <>
        <div className="app">
          <h3 className="title">Witaj na lekcji 49/50 Kantor walut</h3>

          <h2 className="">Kantor Walut</h2>
          <label>
            <input type="number" value={amount} onChange={this.handleChange} />
          </label>
          <div className="cash">{calculators}</div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
