[
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Lecturer",
    "expression": "grel:if(length(value.split(\"; \")) == 1, value.split(\"; \")[0], null)",
    "onError": "set-to-blank",
    "newColumnName": "01: 100 Lecturer",
    "columnInsertIndex": 15,
    "description": "Create column 01: 100 Lecturer at index 15 based on column Lecturer using expression grel:if(length(value.split(\"; \")) == 1, value.split(\"; \")[0], null)"
  },
  {
    "op": "core/column-move",
    "columnName": "01: 100 Lecturer",
    "index": 0,
    "description": "Move column 01: 100 Lecturer to position 0"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Lecturer",
    "expression": "grel:if(length(value.split(\"; \")) > 1, value, null)",
    "onError": "set-to-blank",
    "newColumnName": "Lecturers and moderators",
    "columnInsertIndex": 16,
    "description": "Create column Lecturers and moderators at index 16 based on column Lecturer using expression grel:if(length(value.split(\"; \")) > 1, value, null)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators",
    "expression": "value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators using expression value.trim()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators",
    "expression": "grel:value.chomp(\";\")",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators using expression grel:value.chomp(\";\")"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators",
    "expression": "grel:value.replace(\"; \", \" [spk]; \") + \" [spk]\"",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators using expression grel:value.replace(\"; \", \" [spk]; \") + \" [spk]\""
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators",
    "expression": "grel:if (cells[\"DESCRIPTION\"].value.contains(\"Panelists:\"), value.replace(\"[spk]\", \"[pan]\"), value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators using expression grel:if (cells[\"DESCRIPTION\"].value.contains(\"Panelists:\"), value.replace(\"[spk]\", \"[pan]\"), value)"
  },
  {
    "op": "core/column-split",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators",
    "guessCellType": true,
    "removeOriginalColumn": false,
    "mode": "separator",
    "separator": ";",
    "regex": false,
    "maxColumns": 0,
    "description": "Split column Lecturers and moderators by separator"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators 1",
    "expression": "grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators 1 using expression grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators 2",
    "expression": "grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators 2 using expression grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators 3",
    "expression": "grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators 3 using expression grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators 4",
    "expression": "grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators 4 using expression grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Lecturers and moderators 5",
    "expression": "grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Lecturers and moderators 5 using expression grel:if (cells[\"DESCRIPTION\"].value.contains(\"Moderator: \" + value.chomp(\" [pan]\").chomp(\" [spk]\").partition(\", \")[2] + \" \" + value.partition(\", \")[0]), value.replace(\"[pan]\", \"[mod]\"), value)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "01: 100 Lecturer",
    "expression": "grel:if (value != null, \"spk\", null)",
    "onError": "set-to-blank",
    "newColumnName": "02: 100 relator",
    "columnInsertIndex": 1,
    "description": "Create column 02: 100 relator at index 1 based on column 01: 100 Lecturer using expression grel:if (value != null, \"spk\", null)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "01: 100 Lecturer",
    "expression": "grel:value",
    "onError": "set-to-blank",
    "newColumnName": "03: Lecturer reconciliation",
    "columnInsertIndex": 1,
    "description": "Create column 03: Lecturer reconciliation at index 1 based on column 01: 100 Lecturer using expression grel:value"
  },
  {
    "op": "core/column-move",
    "columnName": "03: Lecturer reconciliation",
    "index": 2,
    "description": "Move column 03: Lecturer reconciliation to position 2"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "03: Lecturer reconciliation",
    "expression": "grel:value.partition(\", \")[2] + \" \" + value.partition(\", \")[0]",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 03: Lecturer reconciliation using expression grel:value.partition(\", \")[2] + \" \" + value.partition(\", \")[0]"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Lecture Title",
    "expression": "grel:value",
    "onError": "set-to-blank",
    "newColumnName": "04: 245a Lecture title",
    "columnInsertIndex": 37,
    "description": "Create column 04: 245a Lecture title at index 37 based on column Lecture Title using expression grel:value"
  },
  {
    "op": "core/column-move",
    "columnName": "04: 245a Lecture title",
    "index": 0,
    "description": "Move column 04: 245a Lecture title to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "04: 245a Lecture title",
    "index": 1,
    "description": "Move column 04: 245a Lecture title to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "04: 245a Lecture title",
    "index": 2,
    "description": "Move column 04: 245a Lecture title to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "04: 245a Lecture title",
    "index": 3,
    "description": "Move column 04: 245a Lecture title to position 3"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "year",
    "expression": "grel:\"Cambridge, Mass.:\" + \"$b Harvard University Graduate School of Design,\" + \"$c\" + \n(if (value == 1900, \"[date of publication not identified]\", value))",
    "onError": "set-to-blank",
    "newColumnName": "05: 264 production",
    "columnInsertIndex": 11,
    "description": "Create column 05: 264 production at index 11 based on column year using expression grel:\"Cambridge, Mass.:\" + \"$b Harvard University Graduate School of Design,\" + \"$c\" + \n(if (value == 1900, \"[date of publication not identified]\", value))"
  },
  {
    "op": "core/column-move",
    "columnName": "05: 264 production",
    "index": 0,
    "description": "Move column 05: 264 production to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "05: 264 production",
    "index": 1,
    "description": "Move column 05: 264 production to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "05: 264 production",
    "index": 2,
    "description": "Move column 05: 264 production to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "05: 264 production",
    "index": 3,
    "description": "Move column 05: 264 production to position 3"
  },
  {
    "op": "core/column-move",
    "columnName": "05: 264 production",
    "index": 4,
    "description": "Move column 05: 264 production to position 4"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "04: 245a Lecture title",
    "expression": "grel:value + \".\"",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 04: 245a Lecture title using expression grel:value + \".\""
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Date (mm/dd/yyyy)",
    "expression": "grel:\"Recorded in Cambridge, Massachusetts on \" + value.toString(\"MMMM d, yyyy\") + \".\"",
    "onError": "set-to-blank",
    "newColumnName": "07: 518 note",
    "columnInsertIndex": 13,
    "description": "Create column 07: 518 note at index 13 based on column Date (mm/dd/yyyy) using expression grel:\"Recorded in Cambridge, Massachusetts on \" + value.toString(\"MMMM d, yyyy\") + \".\""
  },
  {
    "op": "core/column-move",
    "columnName": "07: 518 note",
    "index": 0,
    "description": "Move column 07: 518 note to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "07: 518 note",
    "index": 1,
    "description": "Move column 07: 518 note to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "07: 518 note",
    "index": 2,
    "description": "Move column 07: 518 note to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "07: 518 note",
    "index": 3,
    "description": "Move column 07: 518 note to position 3"
  },
  {
    "op": "core/column-move",
    "columnName": "07: 518 note",
    "index": 4,
    "description": "Move column 07: 518 note to position 4"
  },
  {
    "op": "core/column-move",
    "columnName": "07: 518 note",
    "index": 5,
    "description": "Move column 07: 518 note to position 5"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Event Type",
    "expression": "grel:\"Harvard University.$bGraduate School of Design$1http://www.wikidata.org/entity/Q3128016\"",
    "onError": "set-to-blank",
    "newColumnName": "08: 710 corporate name",
    "columnInsertIndex": 41,
    "description": "Create column 08: 710 corporate name at index 41 based on column Event Type using expression grel:\"Harvard University.$bGraduate School of Design$1http://www.wikidata.org/entity/Q3128016\""
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 0,
    "description": "Move column 08: 710 corporate name to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 1,
    "description": "Move column 08: 710 corporate name to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 2,
    "description": "Move column 08: 710 corporate name to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 3,
    "description": "Move column 08: 710 corporate name to position 3"
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 4,
    "description": "Move column 08: 710 corporate name to position 4"
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 5,
    "description": "Move column 08: 710 corporate name to position 5"
  },
  {
    "op": "core/column-move",
    "columnName": "08: 710 corporate name",
    "index": 6,
    "description": "Move column 08: 710 corporate name to position 6"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Event Name",
    "expression": "grel:value",
    "onError": "set-to-blank",
    "newColumnName": "09: 830 series",
    "columnInsertIndex": 43,
    "description": "Create column 09: 830 series at index 43 based on column Event Name using expression grel:value"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 0,
    "description": "Move column 09: 830 series to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 1,
    "description": "Move column 09: 830 series to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 2,
    "description": "Move column 09: 830 series to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 3,
    "description": "Move column 09: 830 series to position 3"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 4,
    "description": "Move column 09: 830 series to position 4"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 5,
    "description": "Move column 09: 830 series to position 5"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 6,
    "description": "Move column 09: 830 series to position 6"
  },
  {
    "op": "core/column-move",
    "columnName": "09: 830 series",
    "index": 7,
    "description": "Move column 09: 830 series to position 7"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Copy Format",
    "expression": "grel:if(\nvalue == 'VHS', '1 videocassette : $bsound, color ; $c 1/2 in.',\nif(value == 'DVD', '1 videodisc : $bsound, color ; $c 4 3/4 in.', null))",
    "onError": "set-to-blank",
    "newColumnName": "06: 300 extent and physical details of copy",
    "columnInsertIndex": 21,
    "description": "Create column 06: 300 extent and physical details of copy at index 21 based on column Copy Format using expression grel:if(\nvalue == 'VHS', '1 videocassette : $bsound, color ; $c 1/2 in.',\nif(value == 'DVD', '1 videodisc : $bsound, color ; $c 4 3/4 in.', null))"
  },
  {
    "op": "core/row-removal",
    "engineConfig": {
      "facets": [
        {
          "type": "list",
          "name": "Master Format",
          "expression": "value",
          "columnName": "Master Format",
          "invert": false,
          "omitBlank": false,
          "omitError": false,
          "selection": [],
          "selectBlank": true,
          "selectError": false
        },
        {
          "type": "list",
          "name": "Copy Format",
          "expression": "value",
          "columnName": "Copy Format",
          "invert": false,
          "omitBlank": false,
          "omitError": false,
          "selection": [
            {
              "v": {
                "v": "n/a",
                "l": "n/a"
              }
            }
          ],
          "selectBlank": true,
          "selectError": false
        }
      ],
      "mode": "row-based"
    },
    "description": "Remove rows"
  },
  {
    "op": "core/column-move",
    "columnName": "06: 300 extent and physical details of copy",
    "index": 0,
    "description": "Move column 06: 300 extent and physical details of copy to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "06: 300 extent and physical details of copy",
    "index": 1,
    "description": "Move column 06: 300 extent and physical details of copy to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "06: 300 extent and physical details of copy",
    "index": 2,
    "description": "Move column 06: 300 extent and physical details of copy to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "06: 300 extent and physical details of copy",
    "index": 3,
    "description": "Move column 06: 300 extent and physical details of copy to position 3"
  },
  {
    "op": "core/column-move",
    "columnName": "06: 300 extent and physical details of copy",
    "index": 4,
    "description": "Move column 06: 300 extent and physical details of copy to position 4"
  },
  {
    "op": "core/column-move",
    "columnName": "06: 300 extent and physical details of copy",
    "index": 5,
    "description": "Move column 06: 300 extent and physical details of copy to position 5"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Event Type",
    "expression": "grel:if(toLowercase(value).contains('lecture'), 'Lectures. $2 lcgft', if(toLowercase(value).contains('conference'), 'Conferences papers and proceedings. $2 lcgft', if(toLowercase(value).contains('discussion'), 'Panel discussions. $2 lcgft', \nif(toLowercase(value).contains('colloqui'), 'colloquiums. $2 aat', \nif(toLowercase(value).contains('symposi'), 'Panel discussions. $2 lcgft', \nif(toLowercase(value).contains('interview'), 'Interviews. $2 lcgft', if(toLowercase(value).contains('lecture'), 'Lectures. $2 lcgft', if(toLowercase(value).contains('commencement'), 'Graduation speeches. $2 lcgft', null)\n)\n)\n)\n)\n)\n)\n)",
    "onError": "set-to-blank",
    "newColumnName": "10: 655 genre",
    "columnInsertIndex": 9,
    "description": "Create column 10: 655 genre at index 9 based on column Event Type using expression grel:if(toLowercase(value).contains('lecture'), 'Lectures. $2 lcgft', if(toLowercase(value).contains('conference'), 'Conferences papers and proceedings. $2 lcgft', if(toLowercase(value).contains('discussion'), 'Panel discussions. $2 lcgft', \nif(toLowercase(value).contains('colloqui'), 'colloquiums. $2 aat', \nif(toLowercase(value).contains('symposi'), 'Panel discussions. $2 lcgft', \nif(toLowercase(value).contains('interview'), 'Interviews. $2 lcgft', if(toLowercase(value).contains('lecture'), 'Lectures. $2 lcgft', if(toLowercase(value).contains('commencement'), 'Graduation speeches. $2 lcgft', null)\n)\n)\n)\n)\n)\n)\n)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Lecturers and moderators 1",
    "expression": "grel:value.replace(\"[\", \"$4http://id.loc.gov/vocabulary/relators/\").replace(\"]\",\"\")",
    "onError": "set-to-blank",
    "newColumnName": "11: 700 speaker",
    "columnInsertIndex": 10,
    "description": "Create column 11: 700 speaker at index 10 based on column Lecturers and moderators 1 using expression grel:value.replace(\"[\", \"$4http://id.loc.gov/vocabulary/relators/\").replace(\"]\",\"\")"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Lecturers and moderators 2",
    "expression": "grel:trim(value).replace(\"[\", \"$4http://id.loc.gov/vocabulary/relators/\").replace(\"]\",\"\")",
    "onError": "set-to-blank",
    "newColumnName": "12: 700 speaker",
    "columnInsertIndex": 29,
    "description": "Create column 12: 700 speaker at index 29 based on column Lecturers and moderators 2 using expression grel:trim(value).replace(\"[\", \"$4http://id.loc.gov/vocabulary/relators/\").replace(\"]\",\"\")"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 0,
    "description": "Move column 12: 700 speaker to position 0"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 1,
    "description": "Move column 12: 700 speaker to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 2,
    "description": "Move column 12: 700 speaker to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 3,
    "description": "Move column 12: 700 speaker to position 3"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 4,
    "description": "Move column 12: 700 speaker to position 4"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 5,
    "description": "Move column 12: 700 speaker to position 5"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 6,
    "description": "Move column 12: 700 speaker to position 6"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 7,
    "description": "Move column 12: 700 speaker to position 7"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 8,
    "description": "Move column 12: 700 speaker to position 8"
  },
  {
    "op": "core/column-move",
    "columnName": "12: 700 speaker",
    "index": 9,
    "description": "Move column 12: 700 speaker to position 9"
  },
  {
    "op": "core/column-move",
    "columnName": "10: 655 genre",
    "index": 9,
    "description": "Move column 10: 655 genre to position 9"
  },
  {
    "op": "core/column-move",
    "columnName": "11: 700 speaker",
    "index": 10,
    "description": "Move column 11: 700 speaker to position 10"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "01: 100 Lecturer",
    "expression": "grel:value + \"$4http://id.loc.gov/vocabulary/relators/\" + cells[\"02: 100 relator\"].value",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 01: 100 Lecturer using expression grel:value + \"$4http://id.loc.gov/vocabulary/relators/\" + cells[\"02: 100 relator\"].value"
  },
  {
    "op": "core/column-move",
    "columnName": "02: 100 relator",
    "index": 52,
    "description": "Move column 02: 100 relator to position 52"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "01: 100 Lecturer",
    "expression": "grel:if(value != null, cells['04: 245a Lecture title'].value, null)",
    "onError": "set-to-blank",
    "newColumnName": "04: 245a Lecture title 1",
    "columnInsertIndex": 1,
    "description": "Create column 04: 245a Lecture title 1 at index 1 based on column 01: 100 Lecturer using expression grel:if(value != null, cells['04: 245a Lecture title'].value, null)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "01: 100 Lecturer",
    "expression": "grel:if(value != null, null, cells['04: 245a Lecture title'].value)",
    "onError": "set-to-blank",
    "newColumnName": "04: 245a Lecture title 0",
    "columnInsertIndex": 1,
    "description": "Create column 04: 245a Lecture title 0 at index 1 based on column 01: 100 Lecturer using expression grel:if(value != null, null, cells['04: 245a Lecture title'].value)"
  },
  {
    "op": "core/column-move",
    "columnName": "03: Lecturer reconciliation",
    "index": 2,
    "description": "Move column 03: Lecturer reconciliation to position 2"
  },
  {
    "op": "core/column-move",
    "columnName": "03: Lecturer reconciliation",
    "index": 1,
    "description": "Move column 03: Lecturer reconciliation to position 1"
  },
  {
    "op": "core/column-move",
    "columnName": "04: 245a Lecture title",
    "index": 54,
    "description": "Move column 04: 245a Lecture title to position 54"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "DESCRIPTION",
    "expression": "grel:value",
    "onError": "set-to-blank",
    "newColumnName": "13: 500 note",
    "columnInsertIndex": 51,
    "description": "Create column 13: 500 note at index 51 based on column DESCRIPTION using expression grel:value"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "Event Name",
    "expression": "grel:value + \", \" + cells[\"Date (mm/dd/yyyy)\"].value.toString(\"MMMM d, YYYY\") + \".\"",
    "onError": "set-to-blank",
    "newColumnName": "13: 245b",
    "columnInsertIndex": 49,
    "description": "Create column 13: 245b at index 49 based on column Event Name using expression grel:value + \", \" + cells[\"Date (mm/dd/yyyy)\"].value.toString(\"MMMM d, YYYY\") + \".\""
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "01: 100 Lecturer",
    "expression": "grel:value .replace(' $4', '$4') .replace('$4http://id.loc.gov/vocabulary/relators/spk', ', $espeaker. $4http://id.loc.gov/vocabulary/relators/spk') .replace('$4http://id.loc.gov/vocabulary/relators/pan', ', $epanelist. $4http://id.loc.gov/vocabulary/relators/pan') .replace('$4http://id.loc.gov/vocabulary/relators/mod', ', $emoderator. $4http://id.loc.gov/vocabulary/relators/mod')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 01: 100 Lecturer using expression grel:value .replace(' $4', '$4') .replace('$4http://id.loc.gov/vocabulary/relators/spk', ', $espeaker. $4http://id.loc.gov/vocabulary/relators/spk') .replace('$4http://id.loc.gov/vocabulary/relators/pan', ', $epanelist. $4http://id.loc.gov/vocabulary/relators/pan') .replace('$4http://id.loc.gov/vocabulary/relators/mod', ', $emoderator. $4http://id.loc.gov/vocabulary/relators/mod')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "11: 700 speaker",
    "expression": "grel:value .replace(' $4', '$4') .replace('$4http://id.loc.gov/vocabulary/relators/spk', ', $espeaker. $4http://id.loc.gov/vocabulary/relators/spk') .replace('$4http://id.loc.gov/vocabulary/relators/pan', ', $epanelist. $4http://id.loc.gov/vocabulary/relators/pan') .replace('$4http://id.loc.gov/vocabulary/relators/mod', ', $emoderator. $4http://id.loc.gov/vocabulary/relators/mod')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 11: 700 speaker using expression grel:value .replace(' $4', '$4') .replace('$4http://id.loc.gov/vocabulary/relators/spk', ', $espeaker. $4http://id.loc.gov/vocabulary/relators/spk') .replace('$4http://id.loc.gov/vocabulary/relators/pan', ', $epanelist. $4http://id.loc.gov/vocabulary/relators/pan') .replace('$4http://id.loc.gov/vocabulary/relators/mod', ', $emoderator. $4http://id.loc.gov/vocabulary/relators/mod')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "12: 700 speaker",
    "expression": "grel:value .replace(' $4', '$4') .replace('$4http://id.loc.gov/vocabulary/relators/spk', ', $espeaker. $4http://id.loc.gov/vocabulary/relators/spk') .replace('$4http://id.loc.gov/vocabulary/relators/pan', ', $epanelist. $4http://id.loc.gov/vocabulary/relators/pan') .replace('$4http://id.loc.gov/vocabulary/relators/mod', ', $emoderator. $4http://id.loc.gov/vocabulary/relators/mod')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 12: 700 speaker using expression grel:value .replace(' $4', '$4') .replace('$4http://id.loc.gov/vocabulary/relators/spk', ', $espeaker. $4http://id.loc.gov/vocabulary/relators/spk') .replace('$4http://id.loc.gov/vocabulary/relators/pan', ', $epanelist. $4http://id.loc.gov/vocabulary/relators/pan') .replace('$4http://id.loc.gov/vocabulary/relators/mod', ', $emoderator. $4http://id.loc.gov/vocabulary/relators/mod')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "04: 245a Lecture title 0",
    "expression": "grel:value\n.replace(', Tape', '. Tape').replace('. Tape', '. $nTape')\n.replace(', Session', '. Session').replace('. Session', '. $nSession')\n.replace(', Part', '. Part').replace('. Part', '. $nPart')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 04: 245a Lecture title 0 using expression grel:value\n.replace(', Tape', '. Tape').replace('. Tape', '. $nTape')\n.replace(', Session', '. Session').replace('. Session', '. $nSession')\n.replace(', Part', '. Part').replace('. Part', '. $nPart')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "04: 245a Lecture title 1",
    "expression": "grel:value\n.replace(', Tape', '. Tape').replace('. Tape', '. $nTape')\n.replace(', Session', '. Session').replace('. Session', '. $nSession')\n.replace(', Part', '. Part').replace('. Part', '. $nPart')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 04: 245a Lecture title 1 using expression grel:value\n.replace(', Tape', '. Tape').replace('. Tape', '. $nTape')\n.replace(', Session', '. Session').replace('. Session', '. $nSession')\n.replace(', Part', '. Part').replace('. Part', '. $nPart')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "04: 245a Lecture title 0",
    "expression": "grel:if(value.contains(/([0-9], [12][09][0-9])\\w+/), value, value + ' ' + cells['Date (mm/dd/yyyy)'].value.toString(\"MMMM d, yyyy\") + '.')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 04: 245a Lecture title 0 using expression grel:if(value.contains(/([0-9], [12][09][0-9])\\w+/), value, value + ' ' + cells['Date (mm/dd/yyyy)'].value.toString(\"MMMM d, yyyy\") + '.')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "04: 245a Lecture title 1",
    "expression": "grel:if(value.contains(/([0-9], [12][09][0-9])\\w+/), value, value + ' ' + cells['Date (mm/dd/yyyy)'].value.toString(\"MMMM d, yyyy\") + '.')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 04: 245a Lecture title 1 using expression grel:if(value.contains(/([0-9], [12][09][0-9])\\w+/), value, value + ' ' + cells['Date (mm/dd/yyyy)'].value.toString(\"MMMM d, yyyy\") + '.')"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "05: 264 production",
    "expression": "grel:value.replace('[date of publication not identified]', '[date of production not identified]')",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 05: 264 production using expression grel:value.replace('[date of publication not identified]', '[date of production not identified]')"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "12: 700 speaker",
    "expression": "grel:'Harvard University. $b Graduate School of Design. $t GSD Public Programs.'",
    "onError": "set-to-blank",
    "newColumnName": "13: 810 series/corporate name",
    "columnInsertIndex": 12,
    "description": "Create column 13: 810 series/corporate name at index 12 based on column 12: 700 speaker using expression grel:'Harvard University. $b Graduate School of Design. $t GSD Public Programs.'"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "Master Format",
    "expression": "grel:value",
    "onError": "set-to-blank",
    "newColumnName": "Master Format for 300",
    "columnInsertIndex": 23,
    "description": "Create column Master Format for 300 at index 23 based on column Master Format using expression grel:value"
  },
  {
    "op": "core/mass-edit",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "Master Format",
    "expression": "value",
    "edits": [
      {
        "from": [
          "DVD (only copy)"
        ],
        "fromBlank": false,
        "fromError": false,
        "to": "DVD"
      }
    ],
    "description": "Mass edit cells in column Master Format"
  },
  {
    "op": "core/mass-edit",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "Master Format",
    "expression": "value",
    "edits": [
      {
        "from": [
          "VHS "
        ],
        "fromBlank": false,
        "fromError": false,
        "to": "VHS"
      }
    ],
    "description": "Mass edit cells in column Master Format"
  },
  {
    "op": "core/mass-edit",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "Master Format",
    "expression": "value",
    "edits": [
      {
        "from": [
          "mini-DV"
        ],
        "fromBlank": false,
        "fromError": false,
        "to": "miniDV"
      }
    ],
    "description": "Mass edit cells in column Master Format"
  },
  {
    "op": "core/mass-edit",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "Master Format",
    "expression": "value",
    "edits": [
      {
        "from": [
          "MiniDV"
        ],
        "fromBlank": false,
        "fromError": false,
        "to": "miniDV"
      }
    ],
    "description": "Mass edit cells in column Master Format"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "columnName": "06: 300 extent and physical details of copy",
    "expression": "grel:if(value == null, \nif(\ncells['Master Format for 300'].value == 'VHS', '1 videocassette : $bsound, color ; $c 1/2 in.', \nif(\ncells['Master Format for 300'].value == 'DVD', '1 videodisc : $bsound, color ; $c 4 3/4 in.', \nif(\ncells['Master Format for 300'].value == 'Hi-8', '1 videocassette : $bsound, color ; $c 8 mm', \nif(\ncells['Master Format for 300'].value == 'miniDV', '1 videocassette : $bsound, color ; $c1/4 in.', \nif(\ncells['Master Format for 300'].value == 'DVCAM', '1 videocassette : $bsound, color ; $c 1/4 in.', null)\n)))), \nvalue)",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column 06: 300 extent and physical details of copy using expression grel:if(value == null, \nif(\ncells['Master Format for 300'].value == 'VHS', '1 videocassette : $bsound, color ; $c 1/2 in.', \nif(\ncells['Master Format for 300'].value == 'DVD', '1 videodisc : $bsound, color ; $c 4 3/4 in.', \nif(\ncells['Master Format for 300'].value == 'Hi-8', '1 videocassette : $bsound, color ; $c 8 mm', \nif(\ncells['Master Format for 300'].value == 'miniDV', '1 videocassette : $bsound, color ; $c 1/4 in.', \nif(\ncells['Master Format for 300'].value == 'DVCAM', '1 videocassette : $bsound, color ; $c 1/4 in.', null)\n)))), \nvalue)"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "record-based"
    },
    "baseColumnName": "HD Barcode Formatted",
    "expression": "grel:value",
    "onError": "set-to-blank",
    "newColumnName": "14: 977w HD Barcode",
    "columnInsertIndex": 16,
    "description": "Create column 14: 977w HD Barcode at index 16 based on column HD Barcode Formatted using expression grel:value"
  },
  {
    "op": "core/column-move",
    "columnName": "14: 977w HD Barcode",
    "index": 15,
    "description": "Move column 14: 977w HD Barcode to position 15"
  },
  {
    "op": "core/column-move",
    "columnName": "14: 977w HD Barcode",
    "index": 14,
    "description": "Move column 14: 977w HD Barcode to position 14"
  },
  {
    "op": "core/column-move",
    "columnName": "14: 977w HD Barcode",
    "index": 13,
    "description": "Move column 14: 977w HD Barcode to position 13"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "Tape No. (MASTER)",
    "expression": "grel:if(value != null, value, cells[\"Access Copy\"].value)",
    "onError": "set-to-blank",
    "newColumnName": "15: 988 Tape Number for 852$h",
    "columnInsertIndex": 24,
    "description": "Create column 15: 988 Tape Number for 852$h at index 24 based on column Tape No. (MASTER) using expression grel:if(value != null, value, cells[\"Access Copy\"].value)"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 23,
    "description": "Move column 15: 988 Tape Number for 852$h to position 23"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 22,
    "description": "Move column 15: 988 Tape Number for 852$h to position 22"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 21,
    "description": "Move column 15: 988 Tape Number for 852$h to position 21"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 20,
    "description": "Move column 15: 988 Tape Number for 852$h to position 20"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 19,
    "description": "Move column 15: 988 Tape Number for 852$h to position 19"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 18,
    "description": "Move column 15: 988 Tape Number for 852$h to position 18"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 17,
    "description": "Move column 15: 988 Tape Number for 852$h to position 17"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 16,
    "description": "Move column 15: 988 Tape Number for 852$h to position 16"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 15,
    "description": "Move column 15: 988 Tape Number for 852$h to position 15"
  },
  {
    "op": "core/column-move",
    "columnName": "15: 988 Tape Number for 852$h",
    "index": 14,
    "description": "Move column 15: 988 Tape Number for 852$h to position 14"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Copy Format",
    "expression": "grel:value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Copy Format using expression grel:value.trim()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Master Format",
    "expression": "grel:value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Master Format using expression grel:value.trim()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Copy Format",
    "expression": "grel:value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Copy Format using expression grel:value.trim()"
  },
  {
    "op": "core/text-transform",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "columnName": "Master Format",
    "expression": "grel:value.trim()",
    "onError": "keep-original",
    "repeat": false,
    "repeatCount": 10,
    "description": "Text transform on cells in column Master Format using expression grel:value.trim()"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [
        {
          "type": "list",
          "name": "Tape No. (MASTER)",
          "expression": "value",
          "columnName": "Tape No. (MASTER)",
          "invert": false,
          "omitBlank": false,
          "omitError": false,
          "selection": [],
          "selectBlank": true,
          "selectError": false
        }
      ],
      "mode": "row-based"
    },
    "baseColumnName": "Copy Format",
    "expression": "grel:value.replace('VHS', 'vf|cbaho|').replace('DVD', 'vd|cvaiz|')",
    "onError": "set-to-blank",
    "newColumnName": "16: 007",
    "columnInsertIndex": 30,
    "description": "Create column 16: 007 at index 30 based on column Copy Format using expression grel:value.replace('VHS', 'vf|cbaho|').replace('DVD', 'vd|cvaiz|')"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 29,
    "description": "Move column 16: 007 to position 29"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 28,
    "description": "Move column 16: 007 to position 28"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 27,
    "description": "Move column 16: 007 to position 27"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 26,
    "description": "Move column 16: 007 to position 26"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 25,
    "description": "Move column 16: 007 to position 25"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 24,
    "description": "Move column 16: 007 to position 24"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 23,
    "description": "Move column 16: 007 to position 23"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 22,
    "description": "Move column 16: 007 to position 22"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 21,
    "description": "Move column 16: 007 to position 21"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 20,
    "description": "Move column 16: 007 to position 20"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 19,
    "description": "Move column 16: 007 to position 19"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 18,
    "description": "Move column 16: 007 to position 18"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 17,
    "description": "Move column 16: 007 to position 17"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 16,
    "description": "Move column 16: 007 to position 16"
  },
  {
    "op": "core/column-move",
    "columnName": "16: 007",
    "index": 15,
    "description": "Move column 16: 007 to position 15"
  },
  {
    "op": "core/column-addition",
    "engineConfig": {
      "facets": [],
      "mode": "row-based"
    },
    "baseColumnName": "16: 007",
    "expression": "grel:\"Playback of this recording’s audiovisual format is limited.  Requests to view recordings will be reviewed by library staff for possible digitization to provide streaming access.\"",
    "onError": "set-to-blank",
    "newColumnName": "17: 506 note",
    "columnInsertIndex": 16,
    "description": "Create column 17: 506 note at index 16 based on column 16: 007 using expression grel:\"Playback of this recording’s audiovisual format is limited.  Requests to view recordings will be reviewed by library staff for possible digitization to provide streaming access.\""
  }
]
