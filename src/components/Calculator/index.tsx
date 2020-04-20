import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import * as styles from "../../styles";
import * as stylesheet from "./stylesheet";

type Salary = "gross" | "net";
type Frequency = "annually" | "mensually" | "hourly";

const privateSalariePercentage = 23;

const Calculator = () => {
  // -- HOOKS --
  const [grossSalary, setGrossSalary] = useState("0");
  const [netSalary, setNetSalary] = useState("0");

  // -- FUNCTIONS --
  const onChange = (newValue: string, salary: Salary, frequency: Frequency) => {
    // Convert value in number
    const numberValue = Number(newValue);

    // If isn't a number:
    if (isNaN(numberValue)) {
      return;
    }

    // If value is equal to 0:
    if (isNaN(numberValue) || Number(newValue) === 0) {
      setNetSalary("0");
      setGrossSalary("0");
      return;
    }

    // default as mensually:
    let value = numberValue;

    switch (true) {
      case frequency === "hourly":
        value = numberValue / 151.67;
        break;
      case frequency === "annually":
        value = numberValue / 12;
        break;
      default:
        break;
    }

    // Calc:
    const net =
      salary === "gross"
        ? value - (value * privateSalariePercentage) / 100
        : value;
    const gross =
      salary === "net"
        ? (value * 100) / (100 - privateSalariePercentage)
        : value;

    // Update fields:
    setNetSalary(Number.isInteger(net) ? net.toString() : net.toFixed(2));
    setGrossSalary(
      Number.isInteger(gross) ? gross.toString() : gross.toFixed(2)
    );
  };

  // -- RENDER --
  return (
    <View style={stylesheet.view.main}>
      <View style={stylesheet.view.salaryBox}>
        <Text style={styles.Font.subtitle}>Salaire brut</Text>
        <View style={stylesheet.view.salaryPeriodBox}>
          <Text style={styles.Font.label}>Annuel</Text>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(newValue: string) =>
              onChange(newValue, "gross", "annually")
            }
            value={
              Number.isInteger(parseFloat(grossSalary) * 12)
                ? (parseFloat(grossSalary) * 12).toString()
                : (parseFloat(grossSalary) * 12).toFixed(2)
            }
          />
        </View>
        <View style={stylesheet.view.salaryPeriodBox}>
          <Text style={styles.Font.label}>Mensuel</Text>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(newValue: string) =>
              onChange(newValue, "gross", "mensually")
            }
            value={grossSalary}
          />
        </View>
        <View style={stylesheet.view.salaryPeriodBox}>
          <Text style={styles.Font.label}>Horaire</Text>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(newValue: string) =>
              onChange(newValue, "gross", "hourly")
            }
            value={
              Number.isInteger(parseFloat(grossSalary) / 151.67)
                ? (parseFloat(grossSalary) / 151.67).toString()
                : (parseFloat(grossSalary) / 151.67).toFixed(2)
            }
          />
        </View>
      </View>

      <View style={stylesheet.view.salaryBox}>
        <Text style={styles.Font.subtitle}>Salaire net</Text>
        <View style={stylesheet.view.salaryPeriodBox}>
          <Text style={styles.Font.label}>Annuel</Text>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(newValue: string) =>
              onChange(newValue, "net", "annually")
            }
            value={
              Number.isInteger(parseFloat(netSalary) * 12)
                ? (parseFloat(netSalary) * 12).toString()
                : (parseFloat(netSalary) * 12).toFixed(2)
            }
          />
        </View>
        <View style={stylesheet.view.salaryPeriodBox}>
          <Text style={styles.Font.label}>Mensuel</Text>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(newValue: string) =>
              onChange(newValue, "net", "mensually")
            }
            value={netSalary}
          />
        </View>
        <View style={stylesheet.view.salaryPeriodBox}>
          <Text style={styles.Font.label}>Horaire</Text>
          <TextInput
            style={stylesheet.textInput}
            onChangeText={(newValue: string) =>
              onChange(newValue, "net", "hourly")
            }
            value={
              Number.isInteger(parseFloat(netSalary) / 151.67)
                ? (parseFloat(netSalary) / 151.67).toString()
                : (parseFloat(netSalary) / 151.67).toFixed(2)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default Calculator;
