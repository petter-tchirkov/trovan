import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    msg: 'store',
    datatable: [
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "red"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      },
      {
        "operation": "Total cycle time (from plant to customer and back)",
      "min": "0s",
      "average": "6d 23h 59m 51s",
      "max": "134d 6h 19m 17s",
      "cylinderCount": 8643,
      "median": "4d 2h 32m 33s",
      "cylinders": "green"
      }
    ]
  },

  mutations: {
    SET_TABLE(state, table) {
      state.datatable = table
    }
  },

  actions: {
    async getTable() {
      await axios.get('http://localhost:3000/details')
      .then((response) => {
        response.data.forEach(detail => {
          detail.id = response.data.indexOf(detail) + 1
        })
        console.log(response.data);
        this.commit('SET_TABLE', response.data)
      })
    }
  }
})

export default store