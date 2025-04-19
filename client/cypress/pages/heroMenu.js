class heroMenu {
    selectorsList() {
        const selectors = {
            createNewHeroButton: "a > .undefined",
            likeButton: ":nth-child(1) > .w-\\[280px\\] > :nth-child(1) > .mt-2 > :nth-child(1) > [data-cy=like]",
            hireButton: ":nth-child(1) > .w-\\[280px\\] > :nth-child(1) > .mt-2 > :nth-child(1) > [data-cy=money]",
            acceptYesButton: ".gap-2 > .text-white",
            denyNoButton: ".gap-4 > .gap-2 > .text-gray-800",
            editHeroButton: ":nth-child(1) > .w-\\[280px\\] > :nth-child(1) > .mt-2 > :nth-child(2) > [data-cy=pencil]",
            editHeroName: "[name='name']",
            editHeroPrice: "[name='price']",
            editHeroNumberFans: "[name='fans']",
            editHeroNumberSaves: "[name='saves']",
            editHeroPower: "[value='4']",
            editHeroAvatar: "[data-cy='avatarFile']",
            submitButton: ".max-w-\\[100px\\]",
            deleteHeroButton: ".bg-red-600",
            deleteHeroYesButton: ".gap-2 > .text-white",
            deleteHeroNoButton: ".gap-2 > .text-gray-800",
        }

        return selectors
    }


    accessCreateNewHero() {
        cy.get(this.selectorsList().createNewHeroButton).click()
    }

    accessEditNewHero(editHeroName, editHeroPrice, editHeroNumberFans, editHeroNumberSaves, editHeroAvatar) {
        cy.get(this.selectorsList().editHeroName).clear().type(editHeroName)
        cy.get(this.selectorsList().editHeroPrice).clear().type(editHeroPrice)
        cy.get(this.selectorsList().editHeroNumberFans).clear().type(editHeroNumberFans)
        cy.get(this.selectorsList().editHeroNumberSaves).clear().type(editHeroNumberSaves)
        cy.get(this.selectorsList().editHeroPower).click()
        cy.get(this.selectorsList().editHeroPower).type('Invisility')
        cy.get(this.selectorsList().editHeroAvatar).click(editHeroAvatar)
        cy.get("[type='file']").selectFile({
            contents: 'E:/development/cypress-heroes/client/cypress/fixtures/avatar.jpg',
            fileName: 'avatar.jpg',
            mimeType: 'image/jpeg'
        }, { force: true })

    }

    accessLikeAnHero() {
        cy.get(this.selectorsList().likeButton).click()
    }

    accessHireAnHero() {
        cy.get(this.selectorsList().hireButton).click()
        cy.get(this.selectorsList().acceptYesButton).click()
    }

    acessNotHireAnHero() {
        cy.get(this.selectorsList().hireButton).click()
        cy.get(this.selectorsList().denyNoButton).click()
    }

    accessEditAnHero() {
        cy.get(this.selectorsList().editHeroButton).click()
    }

    editHeroInfos(editHeroName, editHeroPrice, editHeroNumberFans, editHeroNumberSaves) {
        cy.get(this.selectorsList().editHeroName).clear().type(editHeroName)
        cy.get(this.selectorsList().editHeroPrice).clear().type(editHeroPrice)
        cy.get(this.selectorsList().editHeroNumberFans).clear().type(editHeroNumberFans)
        cy.get(this.selectorsList().editHeroNumberSaves).clear().type(editHeroNumberSaves)
        cy.get(this.selectorsList().editHeroPower).click()
        cy.get(this.selectorsList().editHeroPower).type('Super Strength')
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).click({ force: true })
    }

    acessDeleteAnHero() {
        cy.get(this.selectorsList().deleteHeroButton).click()
        cy.get(this.selectorsList().deleteHeroYesButton).click()
    }

    acessNotDeleteAnHero() {
        cy.get(this.selectorsList().deleteHeroButton).click()
        cy.get(this.selectorsList().deleteHeroNoButton).click()
    }
}

export default heroMenu