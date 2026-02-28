


      resets.forEach(rj => rj[1]())
      t.equal(process.platform, initial, 'teardown goes to initial value')

      resets.forEach((r) => r[0]())
      t.equal(process.platform, initial, 'calling resets after teardown does nothing')
    })

    t.equal(process.platform, initial)
    teardown()
    t.equal(process.platform, originals.platform)
  })
})
