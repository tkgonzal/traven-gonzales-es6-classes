// Book Class File
class Book {
    constructor(title, author, contents) {
        this.title = title;
        this.author = author;
        this.contents = contents;
    }
}

// Variable Delcarations for use in Debugging/Demoing
const romeoAndJuliet = new Book(
    "Romeo and Juliet",
    "William Shakespeare",
    `Two household, both alike in dignity,
    In fair Verona, where we lay our scene,
    From ancient grudge break to new mutiny,
    Where civil blood makes civil hands unclean.
    From forth the fatal loins of these two foes
    A pair of star-cross'd lovers take thie life
    Whose misadvertur'd piteous overthrows
    Doth with their death bury their parents' strife`
);
const theHoundOfTheBaskerVilles = new Book(
    "The Hound of The Baskervilles",
    "Arthur Conan Doyle",
    `Mr. Sherlock Holmes, who was usually very late in the
    mornings, save upon those not infrequent occasions when
    he was up all night, was seated at the breakfast table.
    I stood upon the hearth-rug and picked up the stick which
    our visitor had left behind him the night before. It was a
    fine, thick piece of wood, bulbous-headed, of the sort which
    is known as a “Penang lawyer.” Just under the head was a broad
    silver band nearly an inch across. “To James Mortimer, M.R.C.S.,
    from his friends of the C.C.H.,” was engraved upon it, with the
    date “1884.” It was just such a stick as the old-fashioned family
    practitioner used to carry—dignified, solid, and reassuring.`
);

