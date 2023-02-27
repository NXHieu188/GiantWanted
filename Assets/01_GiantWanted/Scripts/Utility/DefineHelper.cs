using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DefineHelper
{
    public const string Move = "Move";
}
public class NameTag
{
    public const string Player = "Player";
    public const string Enemy = "Enemy";
    public const string Building = "Building";
}
public enum EventID
{
    FailedGame = 0,
    WinGame = 1,
    FirstTouch = 2
}
