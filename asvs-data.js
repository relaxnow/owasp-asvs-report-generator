var ASVS = {
    rules: [
        {
            chapter: 1,
            number: 1,
            levels: ['1A','1B','2A','2B','3','4'],
            title: 'Verify that all application components (either individual or groups of source files, libraries and/or executables) that are present in the application are identified',
            annotation: '',
            passed: {
                title: 'All application components that are present in the application are identified',
                description: 'It is important to identify all components, in case it needs to be updated'
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
            number: 2,
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
            number: 3,
            levels: ['2A','2B','3','4'],
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
            number: 4,
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
            number: 5,
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
            number: 6,
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
            number: 1,
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
        },
        'dummy'
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