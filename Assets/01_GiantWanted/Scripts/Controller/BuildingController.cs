using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BuildingController : MonoBehaviour
{
    public GameObject buildingCheck;
    public GameObject buildingRigid;
    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag(NameTag.Enemy))
        {
            buildingCheck.SetActive(false);
            buildingRigid.SetActive(true);
        }
    }
}
