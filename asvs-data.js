var ASVS = {
    chapters: {
        1  : 'Security Architecture Documentation Requirements',
        2  : 'Authentication Verification Requirements',
        3  : 'Session Management Verification Requirements',
        4  : 'Access Control Verification Requirements',
        5  : 'Input Validation Verification Requirements',
        6  : 'Output Encoding / Escaping Verification Requirements',
        7  : 'Cryptography Verification Requirements',
        8  : 'Error Handling and Logging Verification Requirements',
        9  : 'Data Protection Verification Requirements',
        10 : 'Communication Security Verification Requirements',
        11 : 'HTTP Security Verification Requirements',
        12 : 'Security Configuration Verification Requirements',
        13 : 'Malicious Code Search Verification Requirements',
        14 : 'Internal Security Verification Requirements'
    },
    rules: [
        {
            chapter: 1,
            nr: 1,
            levels: ['1A','1B','2A','2B','3','4'],
            title: 'Verify that all application components (either individual or groups of source files, libraries and/or executables) that are present in the application are identified',
            annotation: 'A component is something like Drupal or third party components',
            passed: {
                title: 'All application components that are present in the application are identified',
                description: 'It is important to identify all components, in case it needs to be updated',
                helpJustify : ''
            },
            failed: {
                title: 'Not all application components that are present in the application are identified',
                description: 'Not identifying components may lead to known security issues.'
            },
            translations: {
                title: {
                    nl : ''
                },
                passed: {
                    title: {
                        nl : ''
                    },
                    description: {
                        nl : ''
                    }

                },
                failed: {
                    nl : ''
                }
            }
        },
        {
            chapter: 1,
            nr: 2,
            levels: ['2A','2B','3','4'],
            title: 'Verify that all components that are not part of the application but that the application relies on to operate are identified',
            annotation: 'Like versions of PHP and MySQL',
            passed: {
                title: 'All components the application relies on are identified',
                description: 'This is useful so as to prevent misconfiguration'
            },
            failed: {
                title: 'Not all components that the application relies on to operate are identified',
                description: 'Failing to identify all components may lead to insecure operating conditions.'
            },
            translations: {
                title: {
                    NL : ''
                },
                passed: {
                    NL : ''
                },
                failed: {
                    NL: ''
                }
            }
        },
        {
            chapter: 1,
            nr: 3,
            levels: ['2A','2B','3','4'],
            title: 'Verify that a high-level architecture for the application has been defined',
            annotation: 'The verifier may create or document a high-level design if the application developer does not provide one.',
            passed: {

            },
            failed: {

            },
            translations: {
                title: {
                    NL : ''
                },
                passed: {
                    NL : ''
                },
                failed: {
                    NL: ''
                }
            }
        },
        {
            chapter: 1,
            nr: 4,
            levels: ['3','4'],
            title: '',
            annotation: '',
            passed: {

            },
            failed: {

            },
            translations: {
                title: {
                    NL : ''
                },
                passed: {
                    NL : ''
                },
                failed: {
                    NL: ''
                }
            }
        },
        {
            chapter: 1,
            nr: 5,
            levels: ['3','4'],
            title: '',
            annotation: '',
            passed: {

            },
            failed: {

            },
            translations: {
                title: {
                    NL : ''
                },
                passed: {
                    NL : ''
                },
                failed: {
                    NL: ''
                }
            }
        },
        {
            chapter: 1,
            nr: 6,
            levels: ['3','4'],
            title: '',
            annotation: '',
            passed: {

            },
            failed: {

            },
            translations: {
                title: {
                    NL : ''
                },
                passed: {
                    NL : ''
                },
                failed: {
                    NL: ''
                }
            }
        },
        // CHAPTER 2
        {
            chapter: 2,
            nr: 1,
            levels: ['1A','1B','2A','2B','3','4'],
            title: '',
            annotation: '',
            passed: {

            },
            failed: {

            },
            translations: {
                title: {
                    NL : ''
                },
                passed: {
                    NL : ''
                },
                failed: {
                    NL: ''
                }
            }
        }
    ],
    riskRanges: [
        {
            start: 0,
            end: 3,
            title: 'Low',
            translations: {
                nl: 'Laag'
            },
        },
        {
            start:3,
            end: 6,
            title: 'Medium',
            translations: {
                nl : 'Middelmatig'
            }
        },
        {
            start: 0,
            end: 3,
            title: 'High',
            translations: {
                nl: 'Hoog'
            }
        }
    ]
};