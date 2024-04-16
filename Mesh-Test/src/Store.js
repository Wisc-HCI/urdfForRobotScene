import { create } from 'zustand';
import { Timer } from './Timer'
const useStore = create((set, get) => ({
  ip: '',
  blocks: {},
  Start: {},
  lines: {},
  hulls: {},
  texts: {},
  points: {},
  widgets: {},
  clock: new Timer(),
  
    tfs: {
        "misty.xacro_camera_link": {
            "frame": "misty.xacro_HEAD_1",
            "position": {
                "x": 0.05,
                "y": 0.0,
                "z": 0.0
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_imu_sensor_link": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_MIDDLE_LEFT_WHEEL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.006691,
                "y": 0.060225,
                "z": 0.028646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_REAR_LEFT_WHEEL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.075191,
                "y": 0.060225,
                "z": 0.028646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_REAR_RIGHT_WHEEL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.075191,
                "y": -0.060225,
                "z": 0.028646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_MIDDLE_RIGHT_WHEEL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.006691,
                "y": -0.060225,
                "z": 0.028646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_BODY_BASE_CONNECTOR_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.263414,
                "y": -0.061691,
                "z": 0.210284
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_BASE_RIGHT_COVER_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.062309,
                "y": -0.045,
                "z": 0.074646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_BASE_LEFT_COVER_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.062309,
                "y": 0.045,
                "z": 0.074646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_BASE_FRONT_GRILL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.039109,
                "y": 0.043,
                "z": 0.078796
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_Torso_1": {
            "frame": "misty.xacro_BODY_BASE_CONNECTOR_1",
            "position": {
                "x": 0.214514,
                "y": 0.061691,
                "z": -0.095653
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_NECK_GLOBE_BASE_1": {
            "frame": "misty.xacro_Torso_1",
            "position": {
                "x": 0.014661,
                "y": 0.0228,
                "z": 0.084122
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_HEAD_VENT_RIGHT_1": {
            "frame": "misty.xacro_HEAD_1",
            "position": {
                "x": 0.08973,
                "y": -0.057013,
                "z": 0.04831
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_HEAD_1": {
            "frame": "misty.xacro_NECK_GLOBE_BASE_1",
            "position": {
                "x": 0.015323,
                "y": 0.001375,
                "z": 0.238601
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_EYE_LENS_1": {
            "frame": "misty.xacro_HEAD_1",
            "position": {
                "x": 0.016845,
                "y": 0.061941,
                "z": 0.034753
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_FACE_1": {
            "frame": "misty.xacro_EYE_LENS_1",
            "position": {
                "x": 0.076086,
                "y": 0.007237,
                "z": -0.003703
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_VISOR_GLASS_1": {
            "frame": "misty.xacro_HEAD_1",
            "position": {
                "x": 0.111798,
                "y": -0.024175,
                "z": -0.124256
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_HEAD_VENT_LEFT_1": {
            "frame": "misty.xacro_HEAD_1",
            "position": {
                "x": -0.042326,
                "y": 0.038377,
                "z": -0.162881
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_LEFT_ARM_1": {
            "frame": "misty.xacro_LEFT_ARM_CONNECTOR_1",
            "position": {
                "x": -0.013297,
                "y": 0.005336,
                "z": -0.001514
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_RIGHT_ARM_1": {
            "frame": "misty.xacro_RIGHT_ARM_CONNECTOR_1",
            "position": {
                "x": -0.014964,
                "y": -0.001971,
                "z": -0.000287
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_Battery_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.321414,
                "y": 0.065009,
                "z": 0.175134
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_RIGHT_ARM_CONNECTOR_1": {
            "frame": "misty.xacro_Torso_1",
            "position": {
                "x": 0.044751,
                "y": -0.066216,
                "z": 0.057987
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_LEFT_ARM_CONNECTOR_1": {
            "frame": "misty.xacro_Torso_1",
            "position": {
                "x": 0.044751,
                "y": 0.066216,
                "z": 0.057987
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_FRONT_LEFT_WHEEL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.060309,
                "y": 0.060225,
                "z": 0.036146
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_FRONT_RIGHT_WHEEL_1": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.060309,
                "y": -0.060225,
                "z": 0.036146
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_BALANCE_WHEEL": {
            "frame": "misty.xacro_base_link",
            "position": {
                "x": -0.075191,
                "y": -0.0,
                "z": 0.028646
            },
            "rotation": {
                "w": 1.0,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        },
        "misty.xacro_base_link": {
            "frame": "world",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            }
        }
    },
    items: {
        "misty.xacro_base_link": {
            "shape": "package://misty_description/meshes/base_link.stl",
            "name": "misty.xacro_base_link",
            "frame": "misty.xacro_base_link",
            "position": {
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_MIDDLE_LEFT_WHEEL_1": {
            "shape": "package://misty_description/meshes/MIDDLE_LEFT_WHEEL_1.stl",
            "name": "misty.xacro_MIDDLE_LEFT_WHEEL_1",
            "frame": "misty.xacro_MIDDLE_LEFT_WHEEL_1",
            "position": {
                "x": 0.006691,
                "y": -0.060225,
                "z": -0.027646
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_REAR_LEFT_WHEEL_1": {
            "shape": "package://misty_description/meshes/REAR_LEFT_WHEEL_1.stl",
            "name": "misty.xacro_REAR_LEFT_WHEEL_1",
            "frame": "misty.xacro_REAR_LEFT_WHEEL_1",
            "position": {
                "x": 0.075191,
                "y": -0.060225,
                "z": -0.027646
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_REAR_RIGHT_WHEEL_1": {
            "shape": "package://misty_description/meshes/REAR_RIGHT_WHEEL_1.stl",
            "name": "misty.xacro_REAR_RIGHT_WHEEL_1",
            "frame": "misty.xacro_REAR_RIGHT_WHEEL_1",
            "position": {
                "x": 0.075191,
                "y": 0.060225,
                "z": -0.027646
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_BALANCE_WHEEL": {
            "shape": null,
            "name": "misty.xacro_BALANCE_WHEEL",
            "frame": "misty.xacro_BALANCE_WHEEL",
            "position": {
                "x": 0,
                "y": 0,
                "z": 0
            },
            "rotation": {
                "w": 1,
                "x": 0,
                "y": 0,
                "z": 0
            },
            "color": "",
            "scale": {
                "x": 1,
                "y": 1,
                "z": 1
            },
            "highlight": false
        },
        "misty.xacro_MIDDLE_RIGHT_WHEEL_1": {
            "shape": "package://misty_description/meshes/MIDDLE_RIGHT_WHEEL_1.stl",
            "name": "misty.xacro_MIDDLE_RIGHT_WHEEL_1",
            "frame": "misty.xacro_MIDDLE_RIGHT_WHEEL_1",
            "position": {
                "x": 0.006691,
                "y": 0.060225,
                "z": -0.027646
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_BODY_BASE_CONNECTOR_1": {
            "shape": "package://misty_description/meshes/BODY_BASE_CONNECTOR_1.stl",
            "name": "misty.xacro_BODY_BASE_CONNECTOR_1",
            "frame": "misty.xacro_BODY_BASE_CONNECTOR_1",
            "position": {
                "x": 0.263414,
                "y": 0.061691,
                "z": -0.210284
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_BASE_RIGHT_COVER_1": {
            "shape": "package://misty_description/meshes/BASE_RIGHT_COVER_1.stl",
            "name": "misty.xacro_BASE_RIGHT_COVER_1",
            "frame": "misty.xacro_BASE_RIGHT_COVER_1",
            "position": {
                "x": -0.062309,
                "y": 0.045,
                "z": -0.074646
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_BASE_LEFT_COVER_1": {
            "shape": "package://misty_description/meshes/BASE_LEFT_COVER_1.stl",
            "name": "misty.xacro_BASE_LEFT_COVER_1",
            "frame": "misty.xacro_BASE_LEFT_COVER_1",
            "position": {
                "x": -0.062309,
                "y": -0.045,
                "z": -0.074646
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_BASE_FRONT_GRILL_1": {
            "shape": "package://misty_description/meshes/BASE_FRONT_GRILL_1.stl",
            "name": "misty.xacro_BASE_FRONT_GRILL_1",
            "frame": "misty.xacro_BASE_FRONT_GRILL_1",
            "position": {
                "x": -0.039109,
                "y": -0.043,
                "z": -0.078796
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_Torso_1": {
            "shape": "package://misty_description/meshes/Torso_1.stl",
            "name": "misty.xacro_Torso_1",
            "frame": "misty.xacro_Torso_1",
            "position": {
                "x": 0.0489,
                "y": 0.0,
                "z": -0.114631
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_NECK_GLOBE_BASE_1": {
            "shape": "package://misty_description/meshes/NECK_GLOBE_BASE_1.stl",
            "name": "misty.xacro_NECK_GLOBE_BASE_1",
            "frame": "misty.xacro_NECK_GLOBE_BASE_1",
            "position": {
                "x": 0.034239,
                "y": -0.0228,
                "z": -0.198753
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_HEAD_VENT_RIGHT_1": {
            "shape": "package://misty_description/meshes/HEAD_VENT_RIGHT_1.stl",
            "name": "misty.xacro_HEAD_VENT_RIGHT_1",
            "frame": "misty.xacro_HEAD_VENT_RIGHT_1",
            "position": {
                "x": -0.070814,
                "y": 0.032838,
                "z": -0.485664
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_HEAD_1": {
            "shape": "package://misty_description/meshes/HEAD_1.stl",
            "name": "misty.xacro_HEAD_1",
            "frame": "misty.xacro_HEAD_1",
            "position": {
                "x": 0.018916,
                "y": -0.024175,
                "z": -0.437354
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_EYE_LENS_1": {
            "shape": "package://misty_description/meshes/EYE_LENS_1.stl",
            "name": "misty.xacro_EYE_LENS_1",
            "frame": "misty.xacro_EYE_LENS_1",
            "position": {
                "x": 0.002071,
                "y": -0.086116,
                "z": -0.472107
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_FACE_1": {
            "shape": "package://misty_description/meshes/FACE_1.stl",
            "name": "misty.xacro_FACE_1",
            "frame": "misty.xacro_FACE_1",
            "position": {
                "x": -0.074015,
                "y": -0.093353,
                "z": -0.468404
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_VISOR_GLASS_1": {
            "shape": "package://misty_description/meshes/VISOR_GLASS_1.stl",
            "name": "misty.xacro_VISOR_GLASS_1",
            "frame": "misty.xacro_VISOR_GLASS_1",
            "position": {
                "x": -0.092882,
                "y": 0.0,
                "z": -0.313098
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_HEAD_VENT_LEFT_1": {
            "shape": "package://misty_description/meshes/HEAD_VENT_LEFT_1.stl",
            "name": "misty.xacro_HEAD_VENT_LEFT_1",
            "frame": "misty.xacro_HEAD_VENT_LEFT_1",
            "position": {
                "x": 0.061242,
                "y": -0.062552,
                "z": -0.274473
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_LEFT_ARM_1": {
            "shape": "package://misty_description/meshes/LEFT_ARM_1.stl",
            "name": "misty.xacro_LEFT_ARM_1",
            "frame": "misty.xacro_LEFT_ARM_1",
            "position": {
                "x": 0.017446,
                "y": -0.071552,
                "z": -0.171104
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_RIGHT_ARM_1": {
            "shape": "package://misty_description/meshes/RIGHT_ARM_1.stl",
            "name": "misty.xacro_RIGHT_ARM_1",
            "frame": "misty.xacro_RIGHT_ARM_1",
            "position": {
                "x": 0.019113,
                "y": 0.068187,
                "z": -0.172331
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_Battery_1": {
            "shape": "package://misty_description/meshes/Battery_1.stl",
            "name": "misty.xacro_Battery_1",
            "frame": "misty.xacro_Battery_1",
            "position": {
                "x": 0.321414,
                "y": -0.065009,
                "z": -0.175134
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_RIGHT_ARM_CONNECTOR_1": {
            "shape": "package://misty_description/meshes/RIGHT_ARM_CONNECTOR_1.stl",
            "name": "misty.xacro_RIGHT_ARM_CONNECTOR_1",
            "frame": "misty.xacro_RIGHT_ARM_CONNECTOR_1",
            "position": {
                "x": 0.004149,
                "y": 0.066216,
                "z": -0.172618
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_LEFT_ARM_CONNECTOR_1": {
            "shape": "package://misty_description/meshes/LEFT_ARM_CONNECTOR_1.stl",
            "name": "misty.xacro_LEFT_ARM_CONNECTOR_1",
            "frame": "misty.xacro_LEFT_ARM_CONNECTOR_1",
            "position": {
                "x": 0.004149,
                "y": -0.066216,
                "z": -0.172618
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_FRONT_LEFT_WHEEL_1": {
            "shape": "package://misty_description/meshes/FRONT_LEFT_WHEEL_1.stl",
            "name": "misty.xacro_FRONT_LEFT_WHEEL_1",
            "frame": "misty.xacro_FRONT_LEFT_WHEEL_1",
            "position": {
                "x": -0.060309,
                "y": -0.060225,
                "z": -0.035146
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_FRONT_RIGHT_WHEEL_1": {
            "shape": "package://misty_description/meshes/FRONT_RIGHT_WHEEL_1.stl",
            "name": "misty.xacro_FRONT_RIGHT_WHEEL_1",
            "frame": "misty.xacro_FRONT_RIGHT_WHEEL_1",
            "position": {
                "x": -0.060309,
                "y": 0.060225,
                "z": -0.035146
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 0.7,
                "g": 0.7,
                "b": 0.7,
                "a": 1.0
            },
            "scale": {
                "x": 0.001,
                "y": 0.001,
                "z": 0.001
            },
            "highlight": false
        },
        "misty.xacro_camera_link": {
            "shape": "cube",
            "name": "misty.xacro_camera_link",
            "frame": "misty.xacro_camera_link",
            "position": {
                "x": 0.07,
                "y": 0.0,
                "z": 0.05
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
            },
            "scale": {
                "x": 0.05,
                "y": 0.05,
                "z": 0.05
            },
            "highlight": false
        },
        "misty.xacro_imu_sensor_link": {
            "shape": "cube",
            "name": "misty.xacro_imu_sensor_link",
            "frame": "misty.xacro_imu_sensor_link",
            "position": {
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "rotation": {
                "w": 1,
                "x": 0.0,
                "y": 0.0,
                "z": 0.0
            },
            "color": {
                "r": 1,
                "g": 1,
                "b": 1,
                "a": 1
            },
            "scale": {
                "x": 0.02,
                "y": 0.02,
                "z": 0.02
            },
            "highlight": false
        }
    },




  setIp: (ip) => set({ ip }),
  addBlock: (id, json) => set((state) => ({
    blocks: { ...state.blocks, [id]: json }
  })),
  removeBlock: (id) => set((state) => {
    // Create a new object excluding the block with the given id
    const newBlocks = Object.keys(state.blocks).reduce((acc, currentId) => {
      if (currentId !== id) {
        acc[currentId] = state.blocks[currentId];
      }
      return acc;
    }, {});

    // Update the state with the new blocks object
    return { blocks: newBlocks };
  }),
  updateBlock: (id, updatedJson) => set((state) => ({
    blocks: { ...state.blocks, [id]: updatedJson }
  })),
  updateTfs: (newTfs) => set({ tfs: newTfs }),
  updateItems: (newItems) => set({ items: newItems }),
  getBlock: (id) => get().blocks[id],

  getBlocksByType: (type) => {
    const blocks = get().blocks;
    return Object.values(blocks).filter(block => block.type === type)[0];
  },



  addBlocktoStart: (id, json) => set((state) => ({
    Start: { ...state.Start, [id]: json }
  })),
  removeBlockfromStart: (id) => set((state) => {
    // Create a new object excluding the block with the given id
    const newBlocks = Object.keys(state.Start).reduce((acc, currentId) => {
      if (currentId !== id) {
        acc[currentId] = state.Start[currentId];
      }
      return acc;
    }, {});

    // Update the state with the new blocks object
    return { Start: newBlocks };
  }),

}));

export default useStore;