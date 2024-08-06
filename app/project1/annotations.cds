using MyService as service from '../../srv/service';
annotate service.student with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'name',
                Value : name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'dob',
                Value : dob,
            },
            {
                $Type : 'UI.DataField',
                Label : 'age',
                Value : age,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'name',
            Value : name,
        },
        {
            $Type : 'UI.DataField',
            Label : 'dob',
            Value : dob,
        },
        {
            $Type : 'UI.DataField',
            Label : 'age',
            Value : age,
        },
    ],
);

annotate service.class with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'students',
            ID : 'students',
            Target : 'classtostud/@UI.LineItem#students',
        },
    ]
);
annotate service.student with @(
    UI.LineItem #students : [
        {
            $Type : 'UI.DataField',
            Value : section,
            Label : 'section',
        },{
            $Type : 'UI.DataField',
            Value : name,
            Label : 'name',
        },{
            $Type : 'UI.DataField',
            Value : id,
            Label : 'id',
        },{
            $Type : 'UI.DataField',
            Value : age,
            Label : 'age',
        },{
            $Type : 'UI.DataField',
            Value : dob,
            Label : 'dob',
        },]
);
annotate service.class with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : section,
            Label : 'section',
        },
        {
            $Type : 'UI.DataField',
            Value : count,
            Label : 'count',
        },
    ]
);
annotate service.class with @(
    UI.SelectionPresentationVariant #table : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
    }
);
