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
            number: 2,
            levels: ['2A','2B','3','4'],
            title: ''
        }
    ]
};